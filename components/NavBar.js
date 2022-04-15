import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "./Logo";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const mobileListener = () => {
    if (window.innerWidth < 863) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", mobileListener);
    mobileListener();
  }, []);

  return (
    <div className="z-10">
      <div className="fixed top-0 flex justify-between items-center bg-white h-20 z-30 w-screen">
        <div className="text-gray py-4 no-underline text-3xl block font-bree text-primary ml-8">
          {/* <Logo /> */}
          <a href="/">Dash Blog</a>
        </div>
        {isMobile && (
          <div
            className="flex justify-center items-center h-20 w-20"
            onClick={handleOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
        {isMobile || (
          <>
            <div className="flex justify-center items-center font-liv text-xl">
              <div className="h-20 flex justify-center items-center px-5 hover:bg-hoverGreen hover:text-white">
                <a href="/">Home</a>
              </div>
              <div className="h-20 flex justify-center items-center px-5 hover:bg-hoverGreen hover:text-white">
                <a href="/blog">Blog</a>
              </div>
              <div className="h-20 flex justify-center items-center px-5 hover:bg-hoverGreen hover:text-white">
                <a href="/services">Services</a>
              </div>
              <div className="h-20 flex justify-center items-center px-5 hover:bg-hoverGreen hover:text-white">
                <a href="/about">About</a>
              </div>
              <div className="h-20 flex justify-center items-center px-5 hover:bg-hoverGreen hover:text-white">
                <a href="/contact">Contact Us</a>
              </div>
            </div>
            <div className="flex justify-evenly h-20 items-center">
              <FaFacebookF className="mx-3 hover:text-hoverGreen" />
              <FaInstagram className="mx-3 hover:text-hoverGreen" />
              <FaTwitter className="mx-3 hover:text-hoverGreen" />
              <FaYoutube className="mx-3 hover:text-hoverGreen" />
            </div>
          </>
        )}
      </div>
      <div
        className={
          "fixed w-screen bg-white transition-[top] ease-in-out duration-1000 z-20" +
          (isOpen && isMobile ? " top-20" : " -top-full")
        }
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <div
          className="w-screen flex justify-center items-center flex-col font-liv text-xl"
          style={{ height: "calc(100vh - 10rem)" }}
        >
          <div className="h-16 flex justify-center items-center">
            <a href="/">Home</a>
          </div>
          <div className="h-16 flex justify-center items-center">
            <a href="/blog">Blog</a>
          </div>
          <div className="h-16 flex justify-center items-center">
            <a href="/services">Services</a>
          </div>
          <div className="h-16 flex justify-center items-center">
            <a href="/about">About</a>
          </div>
          <div className="h-16 flex justify-center items-center">
            <a href="/contact">Contact Us</a>
          </div>
        </div>
        <div className="flex justify-evenly h-20 items-center">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
