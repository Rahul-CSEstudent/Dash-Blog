import React from "react";
import Logo from "./Logo";
import styles from "./NavBar.module.css";


const Sidebar = () => {
  return (
    <div className={styles.body}>
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <div className={styles.brand}>
          <a href="#" className="text-gray">Dash Blog</a>
        </div>
        <div>
          <ul className={styles.items}>
            <li className={styles.link}>
              <a href = "#"> Home </a>
            </li>
            <li className={styles.link}>
              <a href = "#"> Blogs </a>
            </li>
            <li className={styles.link}>
              <a href = "#"> Services </a>
            </li>
            <li className={styles.link}>
              <a href = "#"> About </a>
            </li>
            <li className={styles.link}>
              <a href = "#"> Contact </a>
            </li>
          </ul>
        </div>
        <div className={styles.socialText}>
             <a href="#"><i className="fa fa-brands fa-facebook-f"></i></a>
             <a href="#"><i className="fa fa-brands fa-instagram"></i></a>
             <a href="#"><i className="fa fa-brands fa-twitter"></i></a>
             <a href="#"><i className="fa fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Sidebar;
