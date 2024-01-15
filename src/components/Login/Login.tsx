import React, { useContext } from "react";
import { LoginButton } from "../LoginButton/LoginButton";
import { AnimatedLoginBackground } from "../AnimatedLoginBackground/AnimatedLoginBackground";
import * as S from "./Login.styles";
import { ThemeContext } from "styled-components";

export const Login = () => {
  const theme = useContext(ThemeContext);
  return (
    <React.Fragment>
      <S.Title theme={theme}>Vizionary AI</S.Title>
      <LoginButton />
      <AnimatedLoginBackground />
    </React.Fragment>
  );
};
