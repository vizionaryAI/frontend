import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./HamburgerMenu.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { DefaultTheme } from "styled-components";
import { routes } from "./routes";
import { Logout } from "./MenuItems/Logout";
import { useClientStore } from "../../store/client.store";
import { Loader } from "../Loader/Loader";
import { User } from "../../types/user";

type Props = {
  theme: DefaultTheme;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  themeChange: React.Dispatch<React.SetStateAction<DefaultTheme>>;
};

export const HamburgerMenu: React.FC<Props> = ({
  themeChange,
  theme,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const { user } = useClientStore();
  const [isLoading, setIsLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme =
      theme.mode === "light" ? { mode: "dark" } : { mode: "light" };
    localStorage.setItem("themeMode", newTheme.mode);
    themeChange(newTheme);
  };

  const handleLinkClick = (title: string) => {
    if (title === "Home") {
      toggleMenu();
    }
    if (title === "New Short Session") {
      setIsLoading(true);
      // deleteChat("daily").then(() => {
      setIsLoading(false);
      setIsMenuOpen(false);
      // });
    } else if (title === "New Weekly Session") {
      setIsLoading(true);
      //deleteChat("weekly").then(() => {
      setIsLoading(false);
      setIsMenuOpen(false);
      //});
    }
  };

  const routesValidate = (title: string, user: User) => {
    if (
      !user.introduction_completed &&
      (title === "New Short Session" || title === "New Weekly Session")
    ) {
      return false;
    } else if (title === "New Weekly Session" && !user.weekly_open) {
      return false;
    }
    return true;
  };

  return (
    <>
      <S.MenuIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </S.MenuIcon>

      {isMenuOpen && (
        <S.Container>
          {user.premium &&
            routes.map(
              (route, index) =>
                routesValidate(route.title, user) && (
                  <S.MenuItem key={index}>
                    <Link
                      to={route.path}
                      onClick={() => handleLinkClick(route.title)}
                    >
                      {route.title}
                    </Link>
                  </S.MenuItem>
                )
            )}
          <S.MenuItem>
            <Logout />
          </S.MenuItem>

          <S.ThemeToggleWrapper>
            <ThemeToggle toggleTheme={toggleTheme} />
          </S.ThemeToggleWrapper>
          {isLoading && <Loader />}
        </S.Container>
      )}
    </>
  );
};
