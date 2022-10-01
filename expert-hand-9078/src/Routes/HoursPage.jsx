import React, { useEffect, useState } from "react";
import styles from "./HoursPage.module.css";
import axios from "axios";
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

const todos = {
  id: Date.now(),
  title: "Meeting",
  description: "It's working",
  start: new Date(2022, 8, 27),
  end: new Date(2022, 8, 29),
  timer: 1,
  toggle: false,
};

function HoursPage() {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
    timer: "",
    toggle: false,
  });
  const [allTodos, setAllTodos] = useState([]);
  const [axiosData, setAxiosData] = useState([]);
  const handleChange = (e) => {
    setNewTodo({ ...newTodo, timer: +e.target.value });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let id = Date.now();
  //   setAllTodos([...allTodos, { ...newTodo, id }]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Date.now();
    id = { ...newTodo, id };
    // console.log(id);
    axios.post("http://jpxserverjson.herokuapp.com/posts", id);
  };
  // const handleDelete = (id) => {
  //   setAllTodos(allTodos.filter((todo) => todo.id !== id));
  // };

  const handleDelete = (id) => {
    axios.delete(`http://jpxserverjson.herokuapp.com/posts/${id}`);
  };

  const getData = async () => {
    let res = await axios.get("http://jpxserverjson.herokuapp.com/posts");
    setAxiosData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  // const handleToggle = (id) => {
  //   console.log(id);
  //   let newData = allTodos.map((el) =>
  //     el.id === id ? { ...el, toggle: !el.toggle } : el
  //   );
  //   setAllTodos(newData);
  // };
  
  const handleToggle = (id, change) => {
    axios.patch(`https://jpxserverjson.herokuapp.com/posts/${id}`, {
      toggle: !change,
    });
  };
  console.log(axiosData);
  // console.log(allTodos);

  return (
    <div>
      <div className={styles.formTag}>
        Add Task
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <label>
            Add title
            <input
              type="text"
              placeholder="Add Title"
              className={styles.inputTag}
              value={newTodo.title}
              onChange={(e) =>
                setNewTodo({ ...newTodo, title: e.target.value })
              }
            />
          </label>
          <label>
            Add description
            <input
              type="text"
              placeholder="Add Desc"
              className={styles.inputTag}
              value={newTodo.description}
              onChange={(e) =>
                setNewTodo({ ...newTodo, description: e.target.value })
              }
            />
          </label>
          <label>
            Start Date
            <DatePicker
              placeholderText="Start Date"
              className={styles.datePickerTag}
              selected={newTodo.start}
              onChange={(start) => setNewTodo({ ...newTodo, start })}
            />
          </label>
          <label>
            Start End
            <DatePicker
              placeholderText="End Date"
              className={styles.datePickerTag}
              selected={newTodo.end}
              onChange={(end) => setNewTodo({ ...newTodo, end })}
            />
          </label>
          <label>
            Select Timer{" "}
            <select className={styles.selectTag} onChange={handleChange}>
              <option>Select Timer</option>
              <option value="1">1 Hrs</option>
              <option value="2">2 Hrs</option>
              <option value="3">3 Hrs</option>
              <option value="4">4 Hrs</option>
              <option value="5">5 Hrs</option>
              <option value="7">7 Hrs</option>
              <option value="8">8 Hrs</option>
              <option value="9">9 Hrs</option>
              <option value="10">10 Hrs</option>
            </select>
          </label>
          <button type="submit" className={styles.logs}>
            Logs
          </button>
        </form>
      </div>
      <div className={styles.todoTag}>
        <div className={styles.calendarTag}>
          <Calendar
            localizer={localizer}
            events={allTodos}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 400 }}
          />
        </div>

        <div className={styles.taskTag}>
          <table className={styles.table}>
            <tr>
              <th style={{ width: "15%" }}>Title</th>
              <th style={{ width: "30%" }}>Desc</th>
              <th style={{ width: "10%" }}>Start-Date</th>
              <th style={{ width: "10%" }}>End-Date</th>
              <th style={{ width: "10%" }}>Timer(in hrs.)</th>
              <th style={{ width: "10%" }}>Toggle</th>
              <th style={{ width: "10%" }}>Delete</th>
            </tr>
          </table>
          {/* {allTodos.map((el) => {
            // console.log(JSON.stringify(el.start).slice(1, 11));
            return [
              <table>
                <tr>
                  <td>{el.title}</td>
                  <td>{el.description}</td>
                  <td>{JSON.stringify(el.start).slice(1, 11)}</td>
                  <td>{JSON.stringify(el.end).slice(1, 11)}</td>
                  <td>{el.timer}</td>
                  <td>
                    <button onClick={() => handleToggle(el.id)}>
                      {el.toggle ? "Not Done" : "Done"}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                  </td>
                </tr>
              </table>,
            ];
          })} */}

          {axiosData.map((el) => {
            // console.log(JSON.stringify(el.start).slice(1, 11));
            return [
              <table>
                <tr>
                  <td>{el.title}</td>
                  <td>{el.description}</td>
                  <td>{el.start}</td>
                  <td>{el.end}</td>
                  <td>{el.timer}</td>
                  <td>
                    <button onClick={() => handleToggle(el.id, el.toggle)}>
                      {el.toggle ? "Not Done" : "Done"}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                  </td>
                </tr>
              </table>,
            ];
          })}
        </div>

        {/* <div className={styles.taskTag}>
          {allTodos.map((el) => {
            return (
              <div style={{ display: "flex" }}>
                <div className={styles.showData} key={el.id}>
                  {el.title}
                </div>
                <button onClick={() => handleToggle(el.id)}>
                  {el.toggle ? "NotDone" : "Done"}
                </button>
                <button onClick={() => handleDelete(el.id)}>Delete</button>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default HoursPage;
