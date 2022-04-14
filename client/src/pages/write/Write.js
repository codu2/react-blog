import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import styles from "./Write.module.css";
import { RiImageAddLine } from "react-icons/ri";

import Context from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [cats, setCats] = useState([]);
  const [category, setCategory] = useState({
    life: false,
    music: false,
    sport: false,
    style: false,
    tech: false,
    cinema: false,
  });
  const [selectedCats, setSelectedCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  const handleCategory = (e) => {
    setCategory({ ...category, [e.target.value]: e.target.checked });
    if (e.target.checked === false) {
      for (let i = 0; i < selectedCats.length; i++) {
        if (selectedCats[i] === e.target.value) {
          selectedCats.splice(i, 1);
          i--;
        }
      }
    } else if (e.target.checked === true) {
      setSelectedCats([...selectedCats, e.target.value]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      desc,
      username: user.username,
      categories: selectedCats,
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
        <ul className={styles["write-category"]}>
          {cats.map((cat) => (
            <li className={styles["write-category-item"]} key={cat._id}>
              <input
                type="checkbox"
                name="category"
                value={cat.name}
                id={cat.name}
                onChange={handleCategory}
              />
              <label htmlFor={cat.name}></label>
              <span>{cat.name}</span>
            </li>
          ))}
        </ul>
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
