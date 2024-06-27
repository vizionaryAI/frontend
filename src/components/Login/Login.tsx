import React from "react";
import { LoginButton } from "../LoginButton/LoginButton";
import { AnimatedLoginBackground } from "../AnimatedLoginBackground/AnimatedLoginBackground";
import * as S from "./Login.styles";

export const Login = () => {
  return (
    <React.Fragment>
      <S.Title>Aimful</S.Title>
      <LoginButton />
      <AnimatedLoginBackground />
    </React.Fragment>
  );
};
