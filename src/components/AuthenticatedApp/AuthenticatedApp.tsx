import React, { useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { routes } from "../HamburgerMenu/routes";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Login/Login";
import { useClientStore } from "../../store/client.store";
import { darkTheme, lightTheme } from "../../theme/theme";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import * as S from "./AuthenticatedApp.styles";
import { Unauthorized } from "../Unauthorized/Unauthorized";
import { Home } from "../Home/Home";
import { Introduction } from "../Introduction/Introduction";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  return { mode: savedTheme ? savedTheme : "light" };
};

export const AuthenticatedApp: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { token, user, setUser } = useClientStore();

  useEffect(() => {
    if (token.length > 0) {
      setUser();
    }
  }, [token]);

  if (token.length === 0) {
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
            {user.premium ? (
              <>
                {user.introduction_completed ? (
                  routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))
                ) : (
                  <>
                    <Route path="/introduction" element={<Introduction />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                  </>
                )}
                <Route path="*" element={<Navigate to="/home" replace />} />
              </>
            ) : (
              <Route path="*" element={<Unauthorized />} />
            )}
            <Route path="/home" element={<Home />} />
          </Routes>
        </S.Layout>
      </S.AppLayout>
    </ThemeProvider>
  );
};
