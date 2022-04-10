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


