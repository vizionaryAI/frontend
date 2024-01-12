import React from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle.tsx";
import * as S from "./Footer.styles.ts";

export const Footer: React.FC<{ toggleTheme: () => void }> = ({
  toggleTheme,
}) => {
  return (
    <S.FooterContainer>
      <ThemeToggle toggleTheme={toggleTheme} />
    </S.FooterContainer>
  );
};
