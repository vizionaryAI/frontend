import React, { useState } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { useClientStore } from "./store/client.store";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout/Layout";
import { darkTheme, lightTheme } from "./theme/theme";
import { QuestionsAndAnswears } from "./components/QuestionsAndAnswears/QuestionsAndAnswears";
import { Header } from "./components/Header/Header";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  return { mode: savedTheme ? savedTheme : "dark" };
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(getInitialTheme);

  const isAuthenticated = useIsAuthenticated();
  const { token } = useClientStore();
  return (
    <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
      <Layout>
        <Header theme={theme} themeChange={setTheme} />
        {isAuthenticated && token && <QuestionsAndAnswears />}
      </Layout>
    </ThemeProvider>
  );
};

export default App;
