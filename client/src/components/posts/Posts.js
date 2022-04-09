import React from "react";

import styles from "./Posts.module.css";

import Post from "../post/Post";

const Posts = () => {
  return (
    <div className={styles.posts}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
