import React, { useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./Register.module.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username: username,
        email: email,
        password: password,
      });

      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.register}>
      <span className={styles["register-title"]}>Register</span>
      <form className={styles["register-form"]} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          className={styles["register-input"]}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          className={styles["register-input"]}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className={styles["register-input"]}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles["register-button"]} type="submit">
          Register
        </button>
        {error && (
          <span
            style={{
              color: "red",
              fontSize: "14px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Something went wrong!
          </span>
        )}
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
