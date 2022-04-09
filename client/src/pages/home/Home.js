import React from "react";

import styles from "./Home.module.css";

import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
