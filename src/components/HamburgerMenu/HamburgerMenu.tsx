import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./HamburgerMenu.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { DefaultTheme } from "styled-components";
import { routes } from "./routes";
import { Logout } from "./MenuItems/Logout";
import { useChatBotConversationStore } from "../../store/chatBotConversation.store";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";
import { useClientStore } from "../../store/client.store";
import { Loader } from "../Loader/Loader";

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
  const { deleteChat } = useChatBotConversationStore();
  const { questionsAndAnswers, getNewQA } = useQuestionsAndAnswersStore();
  const { user } = useClientStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNewQA();
  }, []);

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
    if (title === "New Daily Reflection") {
      setIsLoading(true);
      deleteChat("daily").then(() => {
        setIsLoading(false);
        setIsMenuOpen(false);
      });
    } else if (title === "New Weekly Reflection") {
      setIsLoading(true);
      deleteChat("weekly").then(() => {
        setIsLoading(false);
        setIsMenuOpen(false);
      });
    }
  };

  return (
    <>
      <S.MenuIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </S.MenuIcon>

      {isMenuOpen && (
        <S.Container>
          {user.isPremium &&
            routes.map((route, index) =>
              !questionsAndAnswers.finished_all &&
              (route.title === "New Daily Reflection" ||
                route.title === "New Weekly Reflection") ? null : (
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
