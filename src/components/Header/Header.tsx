import * as S from "./Header.styles";
import { DefaultTheme } from "styled-components";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

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
      <HamburgerMenu themeChange={toggleTheme} />
    </S.Container>
  );
};
