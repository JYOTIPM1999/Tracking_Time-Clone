import React, { useState } from "react";
import styles from "./HoursPage.module.css";
// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { BsCalendarMonth } from "react-icons/bs";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { AiOutlineQuestionCircle } from "react-icons/ai";

// Calendar
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-IN": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const todos = [
  {
    id: Date.now(),
    title: "Big Meeting",
    // allDay: true,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aspernatur a ipsa id dolorum molestiae natus architecto cum nobis nostrum doloribus repudiandae in, minima soluta aperiam harum debitis suscipit eius.",
    start: new Date(2022, 8, 27),
    end: new Date(2022, 8, 29),
  },
];
function HoursPage() {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });
  const [allTodos, setAllTodos] = useState(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Date.now();
    setAllTodos([...allTodos, { ...newTodo, id }]);
  };
  const handleClick = (id) => {
    setAllTodos(allTodos.filter((todo) => todo.id !== id));
  };
  console.log(allTodos);
  return (
    <div>
      {/* <div className={styles.timeBar}>
        <div className={styles.monthBar}>
          <button>
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button>Sep 2022</button>
          <button>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "10%",
          }}
        >
          <AiOutlineQuestionCircle />
          <button style={{ display: "flex" }}>
            <BsCalendarMonth />
            Day
            <MdOutlineKeyboardArrowDown />
          </button>
          <div
            style={{
              backgroundColor: "black",
              padding: "7px",
              borderRadius: "5px",
            }}
          >
            <img
              style={{ height: "15px", width: "15px" }}
              src="https://cdn-icons-png.flaticon.com/512/3349/3349622.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
      <div className={styles.formTag}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Title"
            className={styles.inputTag}
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Add Desc"
            className={styles.inputTag}
            value={newTodo.description}
            onChange={(e) =>
              setNewTodo({ ...newTodo, description: e.target.value })
            }
          />
          <DatePicker
            placeholderText="Start Date"
            className={styles.datePickerTag}
            selected={newTodo.start}
            onChange={(start) => setNewTodo({ ...newTodo, start })}
          />
          <DatePicker
            placeholderText="End Date"
            className={styles.datePickerTag}
            selected={newTodo.end}
            onChange={(end) => setNewTodo({ ...newTodo, end })}
          />
          <input type="submit" value="Logs" />
        </form>
      </div>
      <div className={styles.todoTag}>
        <Calendar
          localizer={localizer}
          events={allTodos}
          startAccessor="start"
          endAccessor="end"
          // className={styles.calendarTag}
          style={{ height: 500, margin: "50px", width: "70%" }}
        />
        <div>
          {allTodos.map((el) => {
            return (
              <div style={{ display: "flex" }}>
                <div className={styles.showData} key={el.id}>
                  {el.description}
                </div>
                <button onClick={() => handleClick(el.id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HoursPage;
