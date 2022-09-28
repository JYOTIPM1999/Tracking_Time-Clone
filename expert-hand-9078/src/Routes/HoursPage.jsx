import React from "react";
import styles from "./HoursPage.module.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsCalendarMonth } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
// import chart from "../../public/Images/chart.png";
function HoursPage() {
  return (
    <div>
      <div className={styles.timeBar}>
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
              // src="../../public/Images/chart.png"
              // src={chart}
              src="https://cdn-icons-png.flaticon.com/512/3349/3349622.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default HoursPage;
