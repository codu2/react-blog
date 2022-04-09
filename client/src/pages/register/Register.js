import React from "react";
//import { Link } from "react-router-dom";

import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.register}>
      <span className={styles["register-title"]}>Register</span>
      <form className={styles["register-form"]}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          className={styles["register-input"]}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          className={styles["register-input"]}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className={styles["register-input"]}
        />
        <button className={styles["register-button"]}>Register</button>
      </form>
    </div>
  );
};

export default Register;

/*
<button className={styles["register-login-button"]}>
  <Link to="/login" className={styles.link}>
    Login
  </Link>
</button>
*/
