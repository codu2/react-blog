import React from "react";

import styles from "./Post.module.css";

const Post = () => {
  return (
    <div className={styles.post}>
      <img
        className={styles["post-img"]}
        src={`https://images.unsplash.com/photo-1508749797192-efdd22441d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
        alt=""
      />
      <div className={styles["post-info"]}>
        <div className={styles["post-cats"]}>
          <span className={styles["post-cat"]}>Music</span>
          <span className={styles["post-cat"]}>Life</span>
        </div>
        <span className={styles["post-title"]}>
          Northeastpartyhouse Golden Hour
        </span>
        <span className={styles["post-date"]}>1 hour ago</span>
      </div>
      <p className={styles["post-desc"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Post;
