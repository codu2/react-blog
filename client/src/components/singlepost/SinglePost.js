import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

import styles from "./SinglePost.module.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const publicFolder = "http://localhost:5000/images/";

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data);
    };
    fetchPost();
  }, [path]);

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
        <h1 className={styles["single-post-title"]}>
          {post.title}
          <div className={styles["single-post-edit"]}>
            <FiEdit className={styles["single-post-icon"]} />
            <FiTrash2 className={styles["single-post-icon"]} />
          </div>
        </h1>
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
        <p className={styles["single-post-desc"]}>{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
