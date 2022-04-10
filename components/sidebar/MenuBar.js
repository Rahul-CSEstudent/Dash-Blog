<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'

const MenuBar = () => {
  return (
    <div>

        <ul>
            <li>
                <a href='#'>
                    <div className="icon">
                        
                    </div>
                    <div className="name"><span data-text="Home">Home</span></div>
                </a>
            </li>
            <li>
                <a href='#'>
                    <div className="icon"></div>
                    <div className="name"><span data-text="Blogs">Blogs</span></div>
                </a>
            </li>
            <li>
                <a href='#'>
                    <div className="icon"></div>
                    <div className="name"><span data-text="Services">Services</span></div>
                </a>
            </li>
            <li>
                <a href='#'>
                    <div className="icon"></div>
                    <div className="name"><span data-text="About">About us</span></div>
                </a>
            </li>
            <li>
                <a href='#'>
                    <div className="icon"></div>
                    <div className="name"><span data-text="contact">Contact</span></div>
                </a>
            </li>
            <li>
                <a href='#'>
                    <div className="icon"></div>
                    <div className="name"><span data-text="About">About</span></div>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default MenuBar;


=======
import styled from "styled-components";
import Logo from "./Logo";

const MenuBar = () => {
  return (
    <List>
      <Logo />
      <div style={{ width: "100%" }}>
        <ListItems>
          <a href="#">
            <div className="icon"></div>
            <div className="name">
              <span data-text="Home">Home</span>
            </div>
          </a>
        </ListItems>
        <ListItems>
          <a href="#">
            <div className="icon"></div>
            <div className="name">
              <span data-text="Blogs">Blogs</span>
            </div>
          </a>
        </ListItems>
        <ListItems>
          <a href="#">
            <div className="icon"></div>
            <div className="name">
              <span data-text="Services">Services</span>
            </div>
          </a>
        </ListItems>
        <ListItems>
          <a href="#">
            <div className="icon"></div>
            <div className="name">
              <span data-text="About">About us</span>
            </div>
          </a>
        </ListItems>
        <ListItems>
          <a href="#">
            <div className="icon"></div>
            <div className="name">
              <span data-text="contact">Contact</span>
            </div>
          </a>
        </ListItems>
        <ListItems>
          <a href="#">
            <div className="icon"></div>
            <div className="name">
              <span data-text="About">About</span>
            </div>
          </a>
        </ListItems>
      </div>
      <FinalDiv>©️ 2022 Dash Blog</FinalDiv>
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
  background-image: linear-gradient(#00e3ff17, #0024ff14);
  height: 100vh;
  overflow: none;
`;

const ListItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  height: 3rem;
  font-size: 1.5rem;
  margin: 0.5rem;
  color: #121212;
`;

const FinalDiv = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #575757;
`;

export default MenuBar;
>>>>>>> 018e4c133db6e14c848d771604c323728dc9f787
