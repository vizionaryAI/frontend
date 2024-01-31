import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticatedApp } from "./components/AuthenticatedApp/AuthenticatedApp";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <AuthenticatedApp />
    </Router>
  );
};
