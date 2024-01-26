import { useEffect } from "react";
import { useClientStore } from "../../store/client.store";
import Button from "../Button/Button";
import * as S from "./LoginButton.styles";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently } =
    useAuth0();
  const { setToken, token } = useClientStore();

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently();
      setToken(token);
    };

    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated, getAccessTokenSilently, setToken]);

  if (isAuthenticated && token.length > 0) {
    return (
      <S.Container>
        <Button onClick={() => logout()}>Log Out</Button>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    </S.Container>
  );
};
