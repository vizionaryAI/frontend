import React, { useState } from "react";
import { LoginButton } from "./components/LoginButton/LoginButton";
import { useIsAuthenticated } from "@azure/msal-react";
import { useClientStore } from "./store/client.store";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout/Layout";
import { Footer } from "./components/Footer/Footer";
import { darkTheme, lightTheme } from "./theme/theme";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  return { mode: savedTheme ? savedTheme : "dark" };
};

const App: React.FC = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme =
      theme.mode === "light" ? { mode: "dark" } : { mode: "light" };
    localStorage.setItem("themeMode", newTheme.mode);
    setTheme(newTheme);
  };
  const isAuthenticated = useIsAuthenticated();
  const { token } = useClientStore();
  return (
    <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
      <Layout>
        <LoginButton />
        {/* {isAuthenticated && token ? (
          <h1>Authenticated</h1>
        ) : (
          <h1>Not Authenticated</h1>
        )} */}
        <Footer toggleTheme={toggleTheme} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
