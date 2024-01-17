import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Layout } from "../Layout/Layout";
import { Header, routes } from "../Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Login/Login";
import { Loader } from "../Loader/Loader";
import { useClientStore } from "../../store/client.store";
import { darkTheme, lightTheme } from "../../theme/theme";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  return { mode: savedTheme ? savedTheme : "dark" };
};

export const AuthenticatedApp: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<DefaultTheme>(getInitialTheme);
  const isAuthenticated = useIsAuthenticated();
  const { token } = useClientStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || token.length === 0) {
      navigate("/login");
    }
    setIsLoading(false);
  }, [isAuthenticated, token, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated || token.length === 0) {
    return (
      <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
        <Layout>
          <Login />
        </Layout>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
      <Layout>
        <Header theme={theme} themeChange={setTheme} />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};
