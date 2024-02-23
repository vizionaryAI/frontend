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
import { User } from "../../types/user";
import { ChatbotQuestionsAndAnswers } from "../../types/chatbot";

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

  const routesValidate = (
    title: string,
    user: User,
    questionsAndAnswers: ChatbotQuestionsAndAnswers
  ) => {
    if (
      !questionsAndAnswers.finished_all &&
      (title === "New Daily Reflection" || title === "New Weekly Reflection")
    ) {
      return false;
    } else if (title === "New Weekly Reflection" && !user.allow_weekly) {
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
                routesValidate(route.title, user, questionsAndAnswers) && (
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
