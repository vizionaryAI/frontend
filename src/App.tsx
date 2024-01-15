import React, { useEffect, useState } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { useClientStore } from "./store/client.store";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout/Layout";
import { darkTheme, lightTheme } from "./theme/theme";
import { Header, routes } from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Login } from "./components/Login/Login";
import { Loader } from "./components/Loader/Loader";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  return { mode: savedTheme ? savedTheme : "dark" };
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<DefaultTheme>(getInitialTheme);
  const isAuthenticated = useIsAuthenticated();
  const { token } = useClientStore();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  if (!isAuthenticated || token.length === 0) {
    return (
      <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
        {isLoading ? (
          <Loader />
        ) : (
          <Layout>
            <Login />
          </Layout>
        )}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <Router>
            <Header theme={theme} themeChange={setTheme} />
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Router>
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default App;
