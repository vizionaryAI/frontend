import React, { useEffect, useState } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { routes } from "../HamburgerMenu/routes";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Login } from "../Login/Login";
import { useClientStore } from "../../store/client.store";
import { darkTheme, lightTheme } from "../../theme/theme";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import * as S from "./AuthenticatedApp.styles";
import { Loader } from "../Loader/Loader";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  return { mode: savedTheme ? savedTheme : "dark" };
};

export const AuthenticatedApp: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useIsAuthenticated();
  const { token } = useClientStore();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated || token.length === 0) {
    navigate("/login");
    return (
      <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
        <S.LoginLayout>
          <Login />
        </S.LoginLayout>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
      <S.AppLayout>
        <HamburgerMenu
          theme={theme}
          themeChange={setTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <S.Layout open={isMenuOpen} theme={theme}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </S.Layout>
      </S.AppLayout>
    </ThemeProvider>
  );
};
