import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [toggleBar, setToggleBar] = useState(false);
  return (
    <header>
      <nav className="navBar">
        <img src="./img/wsLogo_dark.svg" alt="" />
        <div className="openMenu" onClick={() => setToggleBar(!toggleBar)}><FaBars /></div>
        <ul className={toggleBar ? "myLinks mobileLink" : "myLinks"}>
          <li className="ListItems"><a href="/">Home</a> </li>
          <li className="ListItems"><a href="/">About</a> </li>
          <li className="ListItems"><a href="/">Services</a> </li>
          <li className="ListItems"><a href="/">Contact Us</a> </li>
          <div>
            <input type="search" name="search" id="searchArea" placeholder="Search" />
            <button id="searchBtn">search</button>
          </div>
          {/* <div className="closeMenu"><FaTimes /></div> */}
          <button href="/" className="loginBtn" id="logBtn">Login</button>
        </ul>
      </nav>
    </header>
  );
};
