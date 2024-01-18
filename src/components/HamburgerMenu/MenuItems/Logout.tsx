import { useMsal } from "@azure/msal-react";
import { useClientStore } from "../../../store/client.store";

export const Logout: React.FC = () => {
  const { setToken } = useClientStore();
  const { instance } = useMsal();

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

  return <div onClick={logout}>Log Out</div>;
};
