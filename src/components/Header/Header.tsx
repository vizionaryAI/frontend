import * as S from "./Header.styles";
import { LoginButton } from "../LoginButton/LoginButton";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { DefaultTheme } from "styled-components";

type Props = {
  themeChange: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  theme: DefaultTheme;
};

export const Header: React.FC<Props> = ({ theme, themeChange }) => {
  const toggleTheme = () => {
    const newTheme =
      theme.mode === "light" ? { mode: "dark" } : { mode: "light" };
    localStorage.setItem("themeMode", newTheme.mode);
    themeChange(newTheme);
  };
  return (
    <S.Container>
      <LoginButton />
      <ThemeToggle toggleTheme={toggleTheme} />
    </S.Container>
  );
};
