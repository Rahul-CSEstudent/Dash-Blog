import React from "react";
import styles from "./NavBar.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBars,
} from "react-icons/fa";

const handleClick = () => {
  var x = document.getElementById("NavBar");
  if (x.style.height === "10vh") {
    x.setAttribute("style", "height:100vh");
  } else {
    x.setAttribute("style", "height:10vh");
  }
};

/*

.nav .toggle .toggleIcons{
    display: flex;
    justify-content: flex-end;
    padding: 1.7rem 0;
}

.nav .toggle .toggleIcons i{
    font-size: 1.4rem;
    color:#3f4954;
} */

const Sidebar = () => {
  return (
    <div>
      <nav
        className="bg-white transition-[height] ease-in-out delay-1000 ml-5 overflow-hidden"
        style={{ height: "10vh" }}
        id="NavBar"
      >
        {" "}
        {/* .nav */}
        <div className="flex flex-row justify-between flex-wrap">
          {" "}
          {/* .menu */}
          <div className={styles.brand}>
            <a href="#" className="text-gray">
              Dash Blog
            </a>
          </div>
          <div className="absolute top-0 width-[90%] cursor-pointer hidden">
            {" "}
            {/* .toggle */}
            <div className="flex justify-end px-[1.7rem]" onClick={handleClick}>
              {" "}
              {/* .toggleIcons */}
              <FaBars />
            </div>
          </div>
          <div>
            <ul className={styles.items}>
              <li className={styles.link}>
                <a href="#"> Home </a>
              </li>
              <li className={styles.link}>
                <a href="#"> Blogs </a>
              </li>
              <li className={styles.link}>
                <a href="#"> Services </a>
              </li>
              <li className={styles.link}>
                <a href="#"> About </a>
              </li>
              <li className={styles.link}>
                <a href="/Contact"> Contact </a>
              </li>
            </ul>
          </div>
          <div className={styles.socialText}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
