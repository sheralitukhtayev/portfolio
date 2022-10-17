import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="top-words">
          <h1>About Me</h1>
          <p>A lot of information about me</p>
        </div>
        <div className="information">
          <img
            src="https://avatars.githubusercontent.com/u/95168693?v=4"
            alt=""
          />
          <p className="info-text">
            Hello my dear! I am Sherali Tukhtayev and I’m 17. I am from
            Uzbekistan, Bukhara and currently I’m living in Bukhara region,
            Gijduvan. So I started learning Frontend development since 2022's
            February month from <span>Saidbek Arislonov</span> (basics of Html &
            Css), <span>Muhammadjavohir Suratov</span> ("Jivoy" course) ,{" "}
            <span>Clever Programmer</span> (JavaScript, React "20 Hours") in
            YouTube .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
