import React from "react";
import "./Services.css"

const Services = () => {
  return (
    <div className="services-container" id="skills">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My <span>Skills</span>
          </h1>
          {/* <button>Hire me</button> */}
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development stacks</h3>
              <p>
                HTML, CSS, BootStrap, JavaScript, NodeJs
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-brands fa-phoenix-framework"></i>
            <div className="item-desc">
              <h3>Frameworks</h3>
              <p>
                Reactjs,Expressjs
              </p>
            </div>
          </div>
          <div className="services-item">
          <i class="fa-solid fa-database"></i>
            <div className="item-desc">
              <h3>DataBase</h3>
              <p>
                Mongo Db
              </p>
            </div>
          </div>
          <div className="services-item">
          <i class="fa-brands fa-dev"></i>
            <div className="item-desc">
              <h3>DeveloperTools</h3>
              <p>
                Git & GitHub
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Languages</h3>
              <p>
                C, C++, Java
              </p>
            </div>
          </div>
          <div className="services-item">
          <i class="fa-solid fa-database"></i>
            <div className="item-desc">
              <h3>Concepts</h3>
              <p>
                Data Structures & Algorithms, OOPs, DBMS, SQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
