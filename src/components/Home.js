import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="info" id="info">
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/u/95168693?v=4"
          alt=""
        />
        <div className="title" id="title">
          <p className="top-word">Hello, I'm Sherali Tukhtayev</p>
          <h1>FrontEnd Developer</h1>
          <h3>
            17 y.o Frontend Developer from Uzbekistan, Bukhara region. Welcome
            to my personal website
          </h3>
          <div className="buttons">
            <a href="/about-me">
              <button className="btn aboutme">About Me</button>
            </a>
            <a href="/projects">
              <button className="btn portfolio">Portfolio</button>
            </a>
          </div>
          <div className="icons">
            <a target="_blank" href="https://github.com/sheralitukhtayev">
              <svg>
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
              </svg>
            </a>
            <a target="_blank" href="https://instagram.com/sheralitukhtayev">
              <svg>
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </a>
            <a target="_blank" href="https://t.me/sheralitukhtayev">
              <svg>
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png"
        alt=""
        className="coder-img"
      />
    </div>
  );
}

export default Home;
