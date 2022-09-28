import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./AppNavbar.module.css";
import { Link, NavLink } from "react-router-dom";
function AppNavbar() {
  // return (
  //   <div>
  //     <div className={styles.mainDiv}>
  //       <ul>
  //         <NavLink to="/">
  //           <img
  //             src="../Images/logo.png"
  //             style={{ width: "170px", height: "23px" }}
  //           />
  //         </NavLink>
  //         <NavLink to="/">Hours</NavLink>
  //         <NavLink to="/projects">Projects</NavLink>
  //         <li className={styles.dropdwon}>
  //           Reports
  //           <ul>
  //             <li>1</li>
  //             <li>2</li>
  //             <li>3</li>
  //             <li>4</li>
  //             <li>5</li>
  //           </ul>
  //         </li>
  //         <li>Manage</li>
  //         <li>
  //           <FiSearch />
  //         </li>
  //       </ul>
  //       <ul>
  //         <li>
  //           <AiFillPlayCircle />
  //         </li>
  //         <li>
  //           <AiOutlinePlusCircle />
  //         </li>
  //         <li>
  //           <div style={{ border: "1px solid blue" }}>GET PRO</div>
  //         </li>
  //         <li>
  //           <BiDownload />
  //         </li>
  //         <li>
  //           Delete from Data
  //           <RiDeleteBin6Line />
  //         </li>
  //         <li>Profile</li>
  //       </ul>
  //     </div>
  //   </div>
  // );
  return (
    <div className={styles.sourceDiv}>
      <div className={styles.mainDiv1}>
        <ul>
          <li>
            <NavLink to="/">
              <img
                src="../Images/logo.png"
                style={{
                  width: "170px",
                  height: "25px",
                }}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Hours
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={{ textDecoration: "none" }}>
              Projects
            </NavLink>
          </li>
          <li>
            Reports
            <ul className={styles.reportDrop}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </li>
          <li>
            Manage
            <ul className={styles.reportDrop}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </li>
          <li>
            <FiSearch style={{ marginTop: "10px" }} />
          </li>
        </ul>
      </div>
      <div className={styles.mainDiv2}>
        <h1>
          <AiFillPlayCircle />
        </h1>
        <h1>
          <AiOutlinePlusCircle />
        </h1>
        <div className={styles.getPro}>GET PRO</div>
        {/* <BiDownload /> */}
        <div
          style={{
            border: "1px solid blue",
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: "#fff7e5",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          Delete from Data
          <RiDeleteBin6Line style={{ color: "brown", fontSize: "20px" }} />
        </div>
        Profile
      </div>
    </div>
  );
}

export default AppNavbar;
