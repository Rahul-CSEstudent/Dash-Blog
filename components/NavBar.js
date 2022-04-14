import React from "react";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import Contact from "./Contact";

const handleClick = () =>{
    var x = document.getElementById("NavBar");
    if(x.style.height === "10vh"){
      x.setAttribute("style","height:100vh");
    }
    else{
      x.setAttribute("style","height:10vh");
    }
}
 

const Sidebar = () => {
  return (
    <div className={styles.body}>
    <nav className={styles.nav} id="NavBar">
      <div className={styles.menu}>
        <div className={styles.brand}>
          <a href="#" className="text-gray">Dash Blog</a>
        </div>
        <div className={styles.toggle}>
          <div className={styles.toggleIcons}>
            <i className="fa fas fa-bars" onClick={handleClick}></i>
          </div>
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
              <a href = "/Contact"> Contact </a>
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
