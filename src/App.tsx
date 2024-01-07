import "./App.css";
import { msalInstance, loginRequest } from "./authConfig";

function App() {
  const login = async () => {
    try {
      const loginResponse = await msalInstance.loginPopup(loginRequest);

      console.log(loginResponse.accessToken);
      // setTokens(loginResponse.accessToken);
      // További műveletek a bejelentkezés után...
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={() => login()}>Login</button>
    </>
  );
}

export default App;
