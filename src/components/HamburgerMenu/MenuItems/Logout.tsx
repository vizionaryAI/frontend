import { useAuth0 } from "@auth0/auth0-react";

export const Logout: React.FC = () => {
  const { logout } = useAuth0();

  return <div onClick={() => logout()}>Log Out</div>;
};
