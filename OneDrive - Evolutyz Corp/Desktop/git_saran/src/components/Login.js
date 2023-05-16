import React from "react";
import { SignInButton } from "../components/SignInButton";

import { useIsAuthenticated } from "@azure/msal-react";


function Login() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="account-page">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              <img src={require("../assets/img/logo.png")} alt="" />
            </div>
          </div>
          <ul className="nav navbar-nav navbar-flex">
            <li>
              <img
                border="0"
                src={require("../assets/img/icons/ec_inc.png")}
                alt="logo"
                //onClick={()=>window.open('https://www.inc.com/profile/evolutyz', '_blank')}
              />
            </li>
            <li>
              <img
                border="0"
                src={require("../assets/img/icons/GreatPlaceToWorkIndia.png")}
                alt="logo"
                //onClick={()=>window.open('https://www.greatplacetowork.in/great/company/evolutuz-it-corp-services', '_blank')}
              />
            </li>
            <li>
              <img
                border="0"
                src={require("../assets/img/icons/inc5000.png")}
                alt="logo"
                //onClick={()=>window.open('https://www.inc.com/', '_blank')}
              />
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-wrapper">
        <div className="account-content">
          <div>
          <div className="account-text text-center">
            <h2 className="d-inline-block my-0 mr-3" style={{fontWeight: "900"}}>Reward</h2>
            <h3 className="d-inline-block my-0" style={{fontWeight: "400"}}>Program</h3>         
          </div>            
          <img src={require("../assets/img/left_pic.png")} className="img-fluid" alt="" />  
          </div>
          <div className="account-box">
            <div className="account-wrapper">
              <div className="text-center">
                <img src={require("../assets/img/icons/Office-365-Logo.png")} className="img-fluid" height="50" alt="" /> 
              </div> 
              <p className="account-subtitle">&nbsp;</p>

              <div className="form-group text-center">
                {isAuthenticated ? (
                  (window.location.href = "/home")
                ) : (
                  <SignInButton />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
