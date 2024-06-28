import React from "react";
import { LoginButton } from "../LoginButton/LoginButton";
import { AnimatedLoginBackground } from "../AnimatedLoginBackground/AnimatedLoginBackground";
import logo from "../../assets/logo.png";
import * as S from "./Login.styles";

export const Login = () => {
  return (
    <React.Fragment>
      <S.Container>
        <S.Logo src={logo} alt="Aimful Logo" />
      </S.Container>
      <LoginButton />
      <AnimatedLoginBackground />
    </React.Fragment>
  );
};
