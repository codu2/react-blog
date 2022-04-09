import React from "react";

import styles from "./Settings.module.css";
import { AiOutlineUser } from "react-icons/ai";

import SideBar from "../../components/sidebar/SideBar";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles["settings-wrapper"]}>
        <div className={styles["settings-title"]}>
          <span className={styles["settings-title-update"]}>
            Update Your Account
          </span>
          <span className={styles["settings-title-delete"]}>
            Delete Your Account
          </span>
        </div>
        <form className={styles["settings-form"]}>
          <label>Profile Picture</label>
          <div className={styles["settings-pp"]}>
            <img
              src={`https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80`}
              alt=""
            />
            <label htmlFor="file_input">
              <AiOutlineUser className={styles["settings-pp-icon"]} />
            </label>
            <input
              type="file"
              id="file_input"
              className={styles["settings-pp-input"]}
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Liz" name="name" />
          <label>Email</label>
          <input type="email" placeholder="liz@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className={styles["settings-submit-button"]} type="submit">
            Update
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
