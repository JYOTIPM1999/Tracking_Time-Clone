import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./AppNavbar.module.css";
function AppNavbar() {
  return (
    <div>
      <div className={styles.mainDiv}>
        <ul>
          <li>
            <a>
              <img
                src="../Images/logo.png"
                style={{ width: "170px", height: "23px" }}
              />
            </a>
          </li>
          <li>Hours</li>
          <li>Projects</li>
          <li>Reports</li>
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
