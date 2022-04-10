import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import styles from "./SideBar.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const SideBar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
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
          {cats.map((cat) => (
            <Link
              to={`/?cat=${cat.name}`}
              className={styles.link}
              key={cat._id}
            >
              <li className={styles["sidebar-list-item"]}>{cat.name}</li>
            </Link>
          ))}
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
