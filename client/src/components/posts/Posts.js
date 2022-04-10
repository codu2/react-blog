import React from "react";

import styles from "./Posts.module.css";

import Post from "../post/Post";

const Posts = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
