import React from "react";

import styles from "./SideBar.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-item"]}>
        <span className={styles["sidebar-title"]}>ABOUT ME</span>
        <img
          src={`https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`}
          alt=""
          className={styles["sidebar-img"]}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles["sidebar-item"]}>
        <span className={styles["sidebar-title"]}>CATEGORIES</span>
        <ul className={styles["sidebar-list"]}>
          <li className={styles["sidebar-list-item"]}>Life</li>
          <li className={styles["sidebar-list-item"]}>Music</li>
          <li className={styles["sidebar-list-item"]}>Sport</li>
          <li className={styles["sidebar-list-item"]}>Style</li>
          <li className={styles["sidebar-list-item"]}>Tech</li>
          <li className={styles["sidebar-list-item"]}>Cinema</li>
        </ul>
      </div>
      <div className={styles["sidebar-item"]}>
        <span className={styles["sidebar-title"]}>FOLLOW US</span>
        <ul className={styles["sidebar-social"]}>
          <FaFacebookSquare className={styles["sidebar-icon"]} />
          <FaTwitterSquare className={styles["sidebar-icon"]} />
          <FaPinterestSquare className={styles["sidebar-icon"]} />
          <FaInstagramSquare className={styles["sidebar-icon"]} />
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
