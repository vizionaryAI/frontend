import React, { useEffect, useState } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { useClientStore } from "./store/client.store";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout/Layout";
import { darkTheme, lightTheme } from "./theme/theme";
import { QuestionsAndAnswers } from "./components/QuestionsAndAnswers/QuestionsAndAnswers";
import { Header } from "./components/Header/Header";

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
  return (
    <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          {isAuthenticated && token ? (
            <>
              <Header theme={theme} themeChange={setTheme} />
              <QuestionsAndAnswers />
            </>
          ) : (
            <Login />
          )}
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default App;
