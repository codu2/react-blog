import React from "react";
import { Link } from "react-router-dom";

import styles from "./Post.module.css";

const Post = ({ post }) => {
  const publicFolder = "http://localhost:5000/images/";

  return (
    <div className={styles.post}>
      {post.photo && (
        <img
          className={styles["post-img"]}
          src={publicFolder + post.photo}
          alt=""
        />
      )}
      <div className={styles["post-info"]}>
        <div className={styles["post-cats"]}>
          {post.categories.map((category, i) => (
            <span className={styles["post-cat"]} key={i}>
              {category}
            </span>
          ))}
        </div>
        <Link to={`post/${post._id}`} className={styles.link}>
          <span className={styles["post-title"]}>{post.title}</span>
        </Link>
        <span className={styles["post-date"]}>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className={styles["post-desc"]}>{post.desc}</p>
    </div>
  );
};

export default Post;
