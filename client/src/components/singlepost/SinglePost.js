import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

import styles from "./SinglePost.module.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import Context from "../../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const publicFolder = "http://localhost:5000/images/";

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className={styles["single-post"]}>
      <div className={styles["single-post-wrapper"]}>
        {post.photo && (
          <img
            src={publicFolder + post.photo}
            alt=""
            className={styles["single-post-img"]}
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles["single-post-title-input"]}
            autoFocus
          />
        ) : (
          <h1 className={styles["single-post-title"]}>
            {title}
            {post.username === user?.username && (
              <div className={styles["single-post-edit"]}>
                <FiEdit
                  className={styles["single-post-icon"]}
                  onClick={() => setUpdateMode(true)}
                />
                <FiTrash2
                  className={styles["single-post-icon"]}
                  onClick={handleDelete}
                />
              </div>
            )}
          </h1>
        )}
        <div className={styles["single-post-info"]}>
          <span>
            Author :
            <Link to={`/?user=${post.username}`} className={styles.link}>
              <span className={styles["single-post-author"]}>
                {post.username}
              </span>
            </Link>
          </span>
          <span className={styles["single-post-date"]}>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={styles["single-post-desc-input"]}
          />
        ) : (
          <p className={styles["single-post-desc"]}>{desc}</p>
        )}
        {updateMode && (
          <button
            className={styles["single-post-button"]}
            onClick={handleUpdate}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
