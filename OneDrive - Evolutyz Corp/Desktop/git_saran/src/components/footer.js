import React from "react";

function Footer() {
  return (
    <footer className="d-flex align-items-center justify-content-between bg-white px-4 py-2 "  style={{
      position: "absolute",
      left:0,
      right:0,
      bottom: 0,
      }} >
      
        <div className=" hidden-xs">
          
          <ul className="nav navbar-nav flex-nav">
            <li className="text-left">
              <img
                border="0"
                src={require("../assets/img/icons/ec_inc500.png")}
                alt="logo"
                className="img-inc"
                onClick="window.open('https://www.inc.com/', '_blank');"
              ></img>
            </li>
            <li className="text-center" style={{ "font-size": "12" }}>
              <div className="text-left" style={{ display: "inline-block;" }}>
                <p
                  style={{
                    marginBottom: 2,
                    fontWeight: "400",
                    lineHeight: 1,
                    color: "#212121",
                  }}
                >
                  An Award-Winning IT Solutions Firm
                </p>
                <p
                  style={{
                    color: "#f8983a",
                    marginBottom: 2,
                    fontWeight: "900",
                    lineHeight: 1,
                    letterSpacing: 0.5,
                    textShadow: "1 1 0 rgb(4 4 4 / 50%)",
                  }}
                >
                  Together, the future is limitless.
                </p>
                <p
                  className="mb-0"
                  style={{
                    fontWeight: "400",
                    lineHeight: 1,
                    color: "#212121",
                  }}
                >
                  {" "}
                  Let&quot;s Innovate
                </p>
              </div>
            </li>
            <li className="text-right">
              <img
                border="0"
                src={require("../assets/img/icons/ec_inc.png")}
                alt="logo"
                className="img-circle"
                onClick="window.open('https://www.inc.com/profile/evolutyz', '_blank');"
              ></img>
            </li>
          </ul>
        </div>
        <div>
          <strong>
            Copyright © 2022{" "}
            <a href="https://www.evolutyz.com/">evolutyz corp</a>
          </strong>{" "}
          All rights reserved.
        </div>
      
    </footer>
  );
}

export default Footer;
