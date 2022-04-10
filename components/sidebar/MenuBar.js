import styled from "styled-components";
import Logo from "./Logo";
import Image from 'next/image'
import About from "../../assets/about.png";
import Blog from "../../assets/blogicon.png";
import Contact from "../../assets/Contact.png";
import Home from "../../assets/home.png";
import Service from "../../assets/Services.png";


const MenuBar = () => {
  return (
    <List>
      <Logo />
      <div style={{ width: "100%" }}>


        <ListItems>
          <a href="#">
          <div className="icon">
              <Img><Image src = {Home} alt = "Home"  /></Img>
              <Img><Image src = {Home} alt = "Home"  /></Img>
            </div>
            <div className="name">
              <span data-text="Home">Home</span>
            </div>
           

          </a>
        </ListItems>

        <ListItems>
          <a href="#">
            <div className="icon">
              <Img><Image src = {Blog} alt = "blog"  /></Img>
              <Img><Image src = {Blog} alt = "blog"  /></Img>
            </div>
            <div className="name">
              <span data-text="Blogs">Blogs</span>
            </div>
          </a>
        </ListItems>

        <ListItems>
          <a href="#">
            <div className="icon">
            <align>
              <Img><Image src = {Service} alt = "service"  /></Img>
              <Img><Image src = {Service} alt = "service"  /></Img>
            </align>  
            </div>
            <div className="name">
              <span data-text="Services">Services</span>
            </div>
          </a>
        </ListItems>

        <ListItems>
          <a href="#">
            <div className="icon">
              <Img><Image src = {About} alt = "about"  /></Img>
              <Img><Image src = {About} alt = "about"  /></Img>
            </div>
            <div className="name">
              <span data-text="About">About us</span>
            </div>
          </a>
        </ListItems>

        <ListItems>
          <a href="#">
            <div className="icon">
              <Img><Image src = {Contact} alt = "contact"  /></Img>
              <Img><Image src = {Contact} alt = "contact"  /></Img>
              </div>
            <div className="name">
              <span data-text="contact">Contact</span>
            </div>
          </a>
        </ListItems>

      </div>
      <FinalDiv>©️ 2022 Dash Blog</FinalDiv>
    </List>
  );
};

const List = styled.div`
  position: relative;
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

const Img = styled.div`
  width: 25px;
  height: 30px;
  margin: 3px;
`

const align = styled.div`
  display: flex;
  flex-direction: column;
`




export default MenuBar;

