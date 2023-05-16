import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
//import Button from "react-bootstrap/Button";


export const SignInButton = () => {
  const { instance } = useMsal();

  const  handleLogin = (instance) => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  }

  return (
    <a href="#"
      className="btn btn-primary account-btn ml-auto"
      onClick={() => handleLogin( instance )}
    >
      Sign in with Microsoft Outlook
    </a>
  );
};
