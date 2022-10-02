import React, { useEffect, useState } from "react";
import styles from "./HoursPage.module.css";
import axios from "axios";
import moment from "moment";
import { AiFillDelete } from "react-icons/ai";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";
import { ImBoxAdd } from "react-icons/im";
// Calendar
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AppNavbar from "../Components/Pages/AppNavbar";
import Footer from "../Components/Navbar,Footer/Footer";


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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newTodo.title &&
      newTodo.description &&
      newTodo.start &&
      newTodo.end &&
      newTodo.timer &&
      newTodo.toggle
    ) {
      let id = Date.now();
      id = { ...newTodo, id };
      axios.post("http://jpxserverjson.herokuapp.com/posts", id);
      // getData();
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://jpxserverjson.herokuapp.com/posts/${id}`);
    getData();
  };

  const getData = async () => {
    let res = await axios.get("http://jpxserverjson.herokuapp.com/posts");
    setAxiosData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleToggle = (id, change) => {
    axios.patch(`https://jpxserverjson.herokuapp.com/posts/${id}`, {
      toggle: !change,
    });
    getData();
  };
  console.log(axiosData);
  // console.log(allTodos);

  return (
    <div>
      <AppNavbar/>
      <div className={styles.formTag}>
        <h1 className={styles.head}>Add Task</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", alignItems: "center" }}
        >
          <label>
            Add title
            <input
              type="text"
              // placeholder="Add Title"
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
              // placeholder="Add Desc"
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
              // placeholderText="Start Date"
              className={styles.datePickerTag}
              selected={newTodo.start}
              onChange={(start) => setNewTodo({ ...newTodo, start })}
            />
          </label>
          <label>
            Start End
            <DatePicker
              // placeholderText="End Date"
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
            <ImBoxAdd />
          </button>
        </form>
      </div>
      <div className={styles.todoTag}>
        <div className={styles.calendarTag}>
          <Calendar
            localizer={localizer}
            events={axiosData}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 400 }}
          />
        </div>

        <div className={styles.taskTag}>
          {/* console.log(JSON.stringify(el.start).slice(1, 11)); */}
          <table className={styles.table}>
            <tr>
              <th style={{ width: "15%" }}>Title</th>
              <th style={{ width: "35%" }}>Desc</th>
              <th style={{ width: "10%" }}>Start-Date</th>
              <th style={{ width: "10%" }}>End-Date</th>
              <th style={{ width: "10%" }}>Timer(in hrs.)</th>
              <th style={{ width: "10%" }}>Toggle</th>
              <th style={{ width: "10%" }}>Delete</th>
            </tr>
            {axiosData.map((el) => (
              <tr style={{ fontWeight: "500" }} key={el.id}>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td>{moment(el.start).utc().format("YYYY-MM-DD")}</td>
                <td>{moment(el.end).utc().format("YYYY-MM-DD")}</td>
                <td>{el.timer}</td>
                <td>
                  <button onClick={() => handleToggle(el.id, el.toggle)}>
                    {el.toggle ? (
                      <BsToggle2On color="green" />
                    ) : (
                      <BsToggle2Off color="red" />
                    )}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(el.id)}>
                    <AiFillDelete />
                  </button>
                     
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div style={{marginTop:"1rem"}}><Footer/></div>
      
    </div>
  );
}

export default HoursPage;
