import React, { useState, useContext } from "react";
import axios from "axios";

import styles from "./Write.module.css";
import { RiImageAddLine } from "react-icons/ri";

import Context from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      desc,
      username: user.username,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {}
  };

  return (
    <div className={styles.write}>
      {file && (
        <img
          className={styles["write-img"]}
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className={styles["write-form"]} onSubmit={handleSubmit}>
        <div className={styles["write-form-group"]}>
          <label htmlFor="file_input">
            <RiImageAddLine className={styles["write-icon"]} />
          </label>
          <input
            type="file"
            id="file_input"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className={styles["write-input"]}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles["write-form-group"]}>
          <textarea
            placeholder="Tell your story..."
            type="text"
            className={styles["write-text"]}
            onChange={(e) => setDesc(e.target.value)}
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
