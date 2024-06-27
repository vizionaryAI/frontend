import React from "react";
import { LoginButton } from "../LoginButton/LoginButton";
import { AnimatedLoginBackground } from "../AnimatedLoginBackground/AnimatedLoginBackground";
import centrica from "../../assets/centrica.png";

export const Login = () => {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center", padding: "3rem", zIndex: 100 }}>
        <img src={centrica} alt="Centrica Logo" style={{ width: "20rem" }} />
      </div>
      <LoginButton />
      <AnimatedLoginBackground />
    </React.Fragment>
  );
};
