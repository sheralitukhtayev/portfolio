import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="home">
        <div id="navbar" className="navbar">
          <a href="/">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/47_1-512.png"
              alt=""
            />
          </a>
          <ul className="nav-item" id="nav-item">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about-me">About me</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
