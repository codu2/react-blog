import React from "react";

import styles from "./TopBar.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className={styles.top}>
      <div className={styles["top-left"]}>
        <FaFacebookSquare className={styles["top-icon"]} />
        <FaTwitterSquare className={styles["top-icon"]} />
        <FaPinterestSquare className={styles["top-icon"]} />
        <FaInstagramSquare className={styles["top-icon"]} />
      </div>
      <div className={styles["top-center"]}>
        <ul className={styles["top-list"]}>
          <li className={styles["top-list-item"]}>HOME</li>
          <li className={styles["top-list-item"]}>ABOUT</li>
          <li className={styles["top-list-item"]}>CONTACT</li>
          <li className={styles["top-list-item"]}>WRITE</li>
          <li className={styles["top-list-item"]}>LOGOUT</li>
        </ul>
      </div>
      <div className={styles["top-right"]}>
        <img
          className={styles["top-img"]}
          src={`https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
          alt=""
        />
        <AiOutlineSearch className={styles["top-search-icon"]} />
      </div>
    </div>
  );
};

export default TopBar;
