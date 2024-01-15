import * as S from "./Header.styles";
import { DefaultTheme } from "styled-components";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { ReactNode } from "react";
import { QuestionsAndAnswers } from "../QuestionsAndAnswers/QuestionsAndAnswers";
import { Link } from "react-router-dom";

type Props = {
  themeChange: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  theme: DefaultTheme;
};

type NavigationItem = {
  path: string;
  element: ReactNode;
  title: string;
};

//export const queryClient = new QueryClient();

export const routes: NavigationItem[] = [
  {
    path: "/*",
    element: <QuestionsAndAnswers />,
    title: "Home",
  },
];

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
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.title}
        </Link>
      ))}
    </S.Container>
  );
};
