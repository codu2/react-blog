import React, { useState, useContext } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./Login.module.css";

import Context from "../../context/Context";

const Login = () => {
  const ctx = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    ctx.loginStart();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: username,
        password: password,
      });
      ctx.loginSuccess(res.data);
    } catch (err) {
      ctx.loginFailure();
    }
  };

  return (
    <div className={styles.login}>
      <span className={styles["login-title"]}>Login</span>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className={styles["login-input"]}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className={styles["login-input"]}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={styles["login-button"]}
          type="submit"
          disabled={ctx.isFetching}
        >
          Login
        </button>
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
