import React from "react";
//import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <span className={styles["login-title"]}>Login</span>
      <form className={styles["login-form"]}>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          className={styles["login-input"]}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className={styles["login-input"]}
        />
        <button className={styles["login-button"]}>Login</button>
      </form>
    </div>
  );
};

export default Login;

/*
<button className={styles["login-register-button"]}>
  <Link to="/register" className={styles.link}>
    Register
  </Link>
</button>
*/
