import { useEffect } from "react";
import { useClientStore } from "../../store/client.store";
import Button from "../Button/Button";
import { msalInstance, loginRequest } from "../../authConfig";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

export const LoginButton = () => {
  const isAuthenticated = useIsAuthenticated();

  const { setToken, token } = useClientStore();
  const { instance, accounts, inProgress } = useMsal();
  const account = accounts[0];

  useEffect(() => {
    const getToken = async () => {
      if (!account || inProgress !== "none") {
        return;
      }

      try {
        const silentToken = await instance.acquireTokenSilent({
          scopes: ["openid", "profile", "User.Read"],
          account: account,
        });

        setToken(silentToken.accessToken);
      } catch (error) {
        // Handle error, possibly acquire token using a popup if silent fails
        console.error(error);
      }
    };

    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated, account, inProgress, instance, setToken]);

  const login = async () => {
    try {
      const loginResponse = await msalInstance.loginPopup(loginRequest);

      setToken(loginResponse.accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setToken("");

    instance
      .logoutPopup({
        postLogoutRedirectUri: "/",
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return token && isAuthenticated ? (
    <Button onClick={logout}>Log Out</Button>
  ) : (
    <Button onClick={login}>Log In</Button>
  );
};
