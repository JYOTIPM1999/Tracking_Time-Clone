import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./AppNavbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { UserAuth } from "../RequiredAuth/Context /AuthContext";
function AppNavbar() {
  const {user,logout}= UserAuth()
  const nav= useNavigate()
const handlelogout = async () => {
    try {
      await logout();
      nav("/signin");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className={styles.sourceDiv}>
      <div className={styles.mainDiv1}>
        <Link to="/">
          <img src="../Images/logo.png" className={styles.logoImg} alt="img" />
        </Link>
        <Link to="/">Hours</Link>
        <Link to="/projects">Projects</Link>
        <div className={styles.divv}>
          Reports
          <ul className={styles.reportDrop}>
            <li>Timesheets</li>
            <hr />
            <li>Dashboard</li>
            <li>Project reports</li>
            <li>User Rrorts</li>
            <hr />
            <li>Pace</li>
            <hr />
            <li>Shared reports</li>
          </ul>
        </div>
        <div className={styles.divv}>
          Manage
          <ul className={styles.reportDrop}>
            <li>Team</li>
            <li>Work schedules</li>
            <hr />
            <li>Clients</li>
            <li>Custome fields</li>
            <hr />
            <li>Tracking policies</li>
            <li>Add-ons</li>
          </ul>
        </div>
        <Link>
          <FiSearch />
        </Link>
      </div>

      <div className={styles.mainDiv2}>
        <AiFillPlayCircle size={28} className={styles.playIcon} />
        <AiOutlinePlusCircle size={23} className={styles.plusIcon} />
        <div className={styles.getPro}>GET PRO</div>
        <div className={styles.downloadIcon}>
          <BiDownload />
          <div className={styles.downloadModal}>
            <img src="../Images/downloadmodal.png" alt="" />
          </div>
        </div>
        <div className={styles.deleteIcon}>
          <p>{user && user.email}</p>
          {/* Delete from Data
          <RiDeleteBin6Line
            size={15}
            color="brown"
            className={styles.deleteIcons}
          /> */}
        </div>
       <button className={styles.logout} onClick={handlelogout}>LOGOUT</button>
      {/* // <p>User Mail:{user && user.email}</p> */}
        {/* <div>
          <img
            src="http://drive.google.com/uc?export=view&id=12HT3xBQpjAS87a3ThBcbuIVq0S7VK_il"
            alt="personImg"
            className={styles.profileImg}
          />
        </div> */}
      </div>
    </div>
  );
}

export default AppNavbar;
