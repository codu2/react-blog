import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header-titles"]}>
        <span className={styles["header-title-sm"]}>{`React & Node`}</span>
        <span className={styles["header-title-lg"]}>Blog</span>
      </div>
      <img
        className={styles["header-img"]}
        src="https://images.unsplash.com/photo-1573004653136-a6be2574248d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        alt=""
      />
    </div>
  );
};

export default Header;
