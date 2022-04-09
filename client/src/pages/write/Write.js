import React from "react";

import styles from "./Write.module.css";
import { RiImageAddLine } from "react-icons/ri";

const Write = () => {
  return (
    <div className={styles.write}>
      <img
        className={styles["write-img"]}
        src={`https://images.unsplash.com/photo-1508749797192-efdd22441d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
        alt=""
      />
      <form className={styles["write-form"]}>
        <div className={styles["write-form-group"]}>
          <label htmlFor="file_input">
            <RiImageAddLine className={styles["write-icon"]} />
          </label>
          <input type="file" id="file_input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className={styles["write-input"]}
            autoFocus={true}
          />
        </div>
        <div className={styles["write-form-group"]}>
          <textarea
            placeholder="Tell your story..."
            type="text"
            className={styles["write-text"]}
          />
        </div>
        <button className={styles["write-submit"]} type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
