import React from "react";
import Typical from "react-typical";
import "./Header.css";
import profileImg from "../../assets/Photo.jpg";
const Header = () => {
  return (
    <div className="header-container" id="about">
      {/* header content */}
      <div className="header-content">
        <h1>Hey! I Am</h1>
        <h2 className="fullname">Aditya</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Frontend Developer ❤️",
              2000,
              "Full Stack Developer 🚀",
              2000,
              "Problem Solver 🧑‍💻",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          A passionate Frontend Developer with a love for creating immersive and
          user-friendly web experiences.
        </p>
        {/* pament links */}
        <div className="header-payment-container">
          <a
            href="https://www.linkedin.com/in/aditya-0760bb234/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Adit0026/Adit0026"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/adit_saini__26/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt=""></img>
        
      </div>
    </div>
  );
};

export default Header;
