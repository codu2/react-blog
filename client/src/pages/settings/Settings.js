import React, { useContext, useState } from "react";
import axios from "axios";

import styles from "./Settings.module.css";
import { AiOutlineUser } from "react-icons/ai";

import SideBar from "../../components/sidebar/SideBar";
import Context from "../../context/Context";

const Settings = () => {
  const { user, updateStart, updateSuccess, updateFailure } =
    useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const publicFolder = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateStart();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
      updateSuccess(res.data);
    } catch (error) {
      updateFailure();
    }
  };

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
        <form className={styles["settings-form"]} onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className={styles["settings-pp"]}>
            {user.profilePic || file ? (
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : publicFolder + user.profilePic
                }
                alt=""
              />
            ) : (
              <span className={styles["settings-pp-null"]}>no image</span>
            )}
            <label htmlFor="file_input">
              <AiOutlineUser className={styles["settings-pp-icon"]} />
            </label>
            <input
              type="file"
              id="file_input"
              className={styles["settings-pp-input"]}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="*****"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles["settings-submit-button"]} type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
