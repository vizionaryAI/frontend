import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./HamburgerMenu.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

type Props = {
  themeChange: () => void;
  routes: { title: string; path: string }[];
};

export const HamburgerMenu: React.FC<Props> = ({ themeChange, routes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.MenuIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </S.MenuIcon>

      {isOpen && (
        <S.Container>
          {routes.map((route, index) => (
            <S.MenuItem key={index}>
              <Link to={route.path} onClick={toggleMenu}>
                {route.title}
              </Link>
            </S.MenuItem>
          ))}
          <S.ThemeToggleWrapper>
            <ThemeToggle toggleTheme={themeChange} />
          </S.ThemeToggleWrapper>
        </S.Container>
      )}
    </>
  );
};
