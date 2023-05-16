import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  
  const [isToggle, setToggle] = useState(true);
  const sidebarToggle = () => {
    setToggle(!isToggle);
  };
  return (
    <>
      <div
        className={
          isToggle ? "main-wrapper" : "main-wrapper mini-sidebar slide-nav"
        }
      >
        <div className="header">
          <div className="header-left">
            <a href="index.html" className="logo">
              <img src={require("../assets/img/logo.png")} alt="" />
              <img src={require("../assets/img/logo-white.png")} alt="" />
              <img src={require("../assets/img/logo-wh-black.png")} alt="" />
              <img src={require("../assets/img/logo-or-white.png")} alt="" />
            </a>
          </div>

          <span onClick={sidebarToggle} id="toggle_btn">
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </span>

          <div className="page-title-box">
            <h3>Evolutyz Loyalty Program</h3>
          </div>

          <span id="mobile_btn" className="mobile_btn" onClick={sidebarToggle}>
            <i className="fa fa-bars"></i>
          </span>

          {/* <ul className="nav user-menu">
            <Dropdown className="nav-item has-arrow main-drop" as="li">
              <Dropdown.Toggle className="nav-link" as="a" id="dropdown-basic1">
                <span className="user-img">
                  <img
                    src={require("../assets/img/profiles/avatar-21.jpg")}
                    alt=""
                  ></img>
                  <span className="status online"></span>
                </span>

                <ProfileData graphData={graphData} />
                <span> {name} </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/Profile">My Profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul> */}
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Navbar;
