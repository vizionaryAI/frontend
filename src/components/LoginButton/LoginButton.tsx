import { useEffect } from "react";
import { useClientStore } from "../../store/client.store";
import Button from "../Button/Button";
import { msalInstance, loginRequest } from "../../authConfig";
import { useIsAuthenticated } from "@azure/msal-react";

export const LoginButton = () => {
  const isAuthenticated = useIsAuthenticated();

  const { setToken, token } = useClientStore();

  const login = async () => {
    try {
      const loginResponse = await msalInstance.loginPopup(loginRequest);

      setToken(loginResponse.accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // check for the account and set active account
    const accounts = msalInstance.getAllAccounts();
    if (accounts && accounts.length > 0 && isAuthenticated) {
      msalInstance.setActiveAccount(accounts[0]);
    }
  }, []);

  const logout = () => {
    setToken("");
  };

  return token && isAuthenticated ? (
    <Button onClick={logout}>Log Out</Button>
  ) : (
    <Button onClick={login}>Log In</Button>
  );
};
