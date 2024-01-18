import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import * as S from "./HamburgerMenu.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { QuestionsAndAnswers } from "../QuestionsAndAnswers/QuestionsAndAnswers";
import { DefaultTheme } from "styled-components";
import { LoginButton } from "../LoginButton/LoginButton";

type NavigationItem = {
  path: string;
  element: ReactNode;
  title: string;
};

export const routes: NavigationItem[] = [
  {
    path: "/home",
    element: <QuestionsAndAnswers />,
    title: "Home",
  },
  {
    path: "/login",
    element: <LoginButton />,
    title: "Logout",
  },
];

type Props = {
  themeChange: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  theme: DefaultTheme;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HamburgerMenu: React.FC<Props> = ({
  themeChange,
  theme,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme =
      theme.mode === "light" ? { mode: "dark" } : { mode: "light" };
    localStorage.setItem("themeMode", newTheme.mode);
    themeChange(newTheme);
  };

  return (
    <>
      <S.MenuIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </S.MenuIcon>

      {isMenuOpen && (
        <S.Container>
          <S.MenuItem>
            <Link to="/home" onClick={toggleMenu}>
              Home
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <LoginButton />
          </S.MenuItem>

          <S.ThemeToggleWrapper>
            <ThemeToggle toggleTheme={toggleTheme} />
          </S.ThemeToggleWrapper>
        </S.Container>
      )}
    </>
  );
};
