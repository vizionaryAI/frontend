import React, { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { useSpring } from "react-spring";
import * as S from "./ThemeToggle.styles.ts";

interface ThemeToggleProps {
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("themeMode", theme?.mode);
  }, [theme?.mode]);

  const props = useSpring({
    left: theme?.mode === "dark" ? "0%" : "50%",
  });

  return (
    <S.SwitchContainer onClick={toggleTheme} color={theme?.body}>
      <S.Slider style={props} />
    </S.SwitchContainer>
  );
};
