import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticatedApp } from "./components/AuthenticatedApp/AuthenticatedApp";

export const App: React.FC = () => {
  return (
    <Router>
      <AuthenticatedApp />
    </Router>
  );
};
