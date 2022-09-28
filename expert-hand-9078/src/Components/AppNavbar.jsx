import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./AppNavbar.module.css";
import { Link, NavLink } from "react-router-dom";
function AppNavbar() {
  return (
    <div>
      <div className={styles.mainDiv}>
        <ul>
          <NavLink to="/">
            <img
              src="../Images/logo.png"
              style={{ width: "170px", height: "23px" }}
            />
          </NavLink>
          <NavLink to="/">Hours</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <li className={styles.dropdwon}>
            Reports
            <div className={styles.dropdowncontent}>
              <Link>1</Link>
              <Link>2</Link>
              <Link>3</Link>
              <Link>4</Link>
            </div>
          </li>
          <li>Manage</li>
          <li>
            <FiSearch />
          </li>
        </ul>
        <ul>
          <li>
            <AiFillPlayCircle />
          </li>
          <li>
            <AiOutlinePlusCircle />
          </li>
          <li>
            <div style={{ border: "1px solid blue" }}>GET PRO</div>
          </li>
          <li>
            <BiDownload />
          </li>
          <li>
            Delete from Data
            <RiDeleteBin6Line />
          </li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
}

export default AppNavbar;
