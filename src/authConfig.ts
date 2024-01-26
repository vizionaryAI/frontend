import { PublicClientApplication } from "@azure/msal-browser";

//Azure OAuth Config
//env variables
const clientId = import.meta.env.VITE_AZURE_CLIENT_ID;
const tenantId = import.meta.env.VITE_AZURE_TENANT_ID;
const redirectUri = import.meta.env.VITE_AZURE_REDIRECT_URI;

const msalConfig = {
  auth: {
    clientId,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    redirectUri,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export { msalInstance };

const loginRequest = {
  scopes: ["openid", "profile", "User.Read"], // additional scopes can be added here
};

export { loginRequest };
