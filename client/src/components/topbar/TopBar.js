import React from "react";
import { Outlet, Link } from "react-router-dom";

import styles from "./TopBar.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const TopBar = () => {
  const user = false;

  return (
    <>
      <div className={styles.top}>
        <div className={styles["top-left"]}>
          <FaFacebookSquare className={styles["top-icon"]} />
          <FaTwitterSquare className={styles["top-icon"]} />
          <FaPinterestSquare className={styles["top-icon"]} />
          <FaInstagramSquare className={styles["top-icon"]} />
        </div>
        <div className={styles["top-center"]}>
          <ul className={styles["top-list"]}>
            <li className={styles["top-list-item"]}>
              <Link to="/" className={styles.link}>
                HOME
              </Link>
            </li>
            <li className={styles["top-list-item"]}>ABOUT</li>
            <li className={styles["top-list-item"]}>CONTACT</li>
            <li className={styles["top-list-item"]}>
              <Link to="/write" className={styles.link}>
                WRITE
              </Link>
            </li>
            {user && <li className={styles["top-list-item"]}>LOGOUT</li>}
          </ul>
        </div>
        <div className={styles["top-right"]}>
          {user ? (
            <img
              className={styles["top-img"]}
              src={`https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80`}
              alt=""
            />
          ) : (
            <ul className={styles["top-list"]}>
              <li className={styles["top-list-item"]}>
                <Link to="/login" className={styles.link}>
                  LOGIN
                </Link>
              </li>
              <li className={styles["top-list-item"]}>
                <Link to="/register" className={styles.link}>
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <AiOutlineSearch className={styles["top-search-icon"]} />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default TopBar;
