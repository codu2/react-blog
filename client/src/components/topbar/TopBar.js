import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import styles from "./TopBar.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

import Context from "../../context/Context";

const TopBar = () => {
  const { user, logout } = useContext(Context);

  const handleLogout = () => {
    logout();
  };

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
            {user && (
              <li className={styles["top-list-item"]} onClick={handleLogout}>
                LOGOUT
              </li>
            )}
          </ul>
        </div>
        <div className={styles["top-right"]}>
          {user ? (
            <img className={styles["top-img"]} src={user.profilePic} alt="" />
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
