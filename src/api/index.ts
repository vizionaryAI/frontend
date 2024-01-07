import axios from "axios";
import { useClientStore } from "../store/client.store";

const baseURL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
  baseURL: baseURL,
});

api.defaults.headers.post["Content-Type"] = "application/json";
api.defaults.headers.put["Content-Type"] = "application/json";
api.defaults.headers.patch["Content-Type"] = "application/json";
api.defaults.headers.delete["Content-Type"] = "application/json";

api.interceptors.request.use(
  async (config) => {
    let token = useClientStore.getState().token;
    if (!token) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      token = useClientStore.getState().token;
    }

    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);
