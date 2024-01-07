import React from "react";
import "./App.css";
import { LoginButton } from "./components/LoginButton/LoginButton";
import { useIsAuthenticated } from "@azure/msal-react";
import { useClientStore } from "./store/client.store";

function App() {
  const isAuthenticated = useIsAuthenticated();
  const { token } = useClientStore();
  return (
    <React.Fragment>
      <LoginButton />
      {isAuthenticated && token ? (
        <h1>Authenticated</h1>
      ) : (
        <h1>Not Authenticated</h1>
      )}
    </React.Fragment>
  );
}

export default App;
