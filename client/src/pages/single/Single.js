import React from "react";

import styles from "./Single.module.css";

import SinglePost from "../../components/singlepost/SinglePost";
import SideBar from "../../components/sidebar/SideBar";

const Single = () => {
  return (
    <div className={styles.single}>
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
