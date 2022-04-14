import React, { useContext, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

import styles from "./TopBar.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

import Context from "../../context/Context";

const TopBar = () => {
  const { user, logout } = useContext(Context);

  const publicFolder = "http://localhost:5000/images/";

  const handleLogout = () => {
    logout();
  };

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className={styles.top}>
        <div className={styles["top-left"]}>
          <FaFacebookSquare className={styles["top-icon"]} />
          <FaTwitterSquare className={styles["top-icon"]} />
          <FaPinterestSquare className={styles["top-icon"]} />
          <FaInstagramSquare className={styles["top-icon"]} />
        </div>
        <div className={styles["top-center"]}>
          <ul className={styles["top-list"]}>
            <li className={styles["top-list-item"]}>
              <Link to="/" className={styles.link}>
                HOME
              </Link>
            </li>
            <li className={styles["top-list-item"]}>ABOUT</li>
            <li className={styles["top-list-item"]}>CONTACT</li>
            <li className={styles["top-list-item"]}>
              <Link to="/write" className={styles.link}>
                WRITE
              </Link>
            </li>
            {user && (
              <li className={styles["top-list-item"]} onClick={handleLogout}>
                LOGOUT
              </li>
            )}
          </ul>
        </div>
        <div className={styles["top-right"]}>
          {user ? (
            <Link to="/settings">
              {user.profilePic ? (
                <img
                  className={styles["top-img"]}
                  src={publicFolder + user.profilePic}
                  alt=""
                />
              ) : (
                <span className={styles["top-img-null"]}>
                  {user.username.charAt(0)}
                </span>
              )}
            </Link>
          ) : (
            <ul className={styles["top-list"]}>
              <li className={styles["top-list-item"]}>
                <Link to="/login" className={styles.link}>
                  LOGIN
                </Link>
              </li>
              <li className={styles["top-list-item"]}>
                <Link to="/register" className={styles.link}>
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <AiOutlineSearch
            className={styles["top-search-icon"]}
            onClick={() => setSearchInput((prev) => !prev)}
          />
          {searchInput && (
            <form className={styles["search-form"]}>
              <div className={styles["search-input-wrapper"]}>
                <input
                  type="text"
                  placeholder="Search for user or post"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles["search-input"]}
                />
                <AiOutlineSearch className={styles["search-input-icon"]} />
              </div>
              <div className={styles["search-result"]}>
                <h1>user...</h1>
                <ul className={styles["search-result-list"]}>
                  {searchTerm !== "" &&
                    users
                      .filter((user) =>
                        user.username
                          .toLowerCase()
                          .includes(searchTerm.trim().toLowerCase())
                      )
                      .map((user) => (
                        <Link
                          to={`/?user=${user.username}`}
                          key={user._id}
                          className={styles.link}
                        >
                          <li className={styles["search-result-list-item"]}>
                            {user.username}
                          </li>
                        </Link>
                      ))}
                </ul>
              </div>
              <div className={styles["search-result"]}>
                <h1>post...</h1>
                <ul className={styles["search-result-list"]}>
                  {searchTerm !== "" &&
                    posts
                      .filter((post) =>
                        post.title
                          .toLowerCase()
                          .includes(searchTerm.trim().toLowerCase())
                      )
                      .map((post) => (
                        <Link
                          to={`/post/${post._id}`}
                          key={post._id}
                          className={styles.link}
                        >
                          <li className={styles["search-result-list-item"]}>
                            {post.title}
                          </li>
                        </Link>
                      ))}
                </ul>
              </div>
            </form>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default TopBar;
