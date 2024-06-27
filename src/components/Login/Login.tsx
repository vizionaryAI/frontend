import React from "react";
import { LoginButton } from "../LoginButton/LoginButton";
import { AnimatedLoginBackground } from "../AnimatedLoginBackground/AnimatedLoginBackground";
import logo from "../../assets/logo.png";

export const Login = () => {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center", padding: "3rem", zIndex: 100 }}>
        <img src={logo} alt="Aimful Logo" style={{ width: "20rem" }} />
      </div>
      <LoginButton />
      <AnimatedLoginBackground />
    </React.Fragment>
  );
};
