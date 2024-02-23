import { create } from "zustand";
import { fetchUserAPI } from "../api/user.api";
import { User } from "../types/user";

type ClientStore = {
  token: string;
  user: User;
  setToken: (token: string) => void;
  setUser: () => void;
};

export const useClientStore = create<ClientStore>((set) => ({
  token: "",
  user: {
    admin: false,
    premium: false,
    content_monitored_warning: false,
    weekly_open: false,
    weekly_completed: false,
    allow_weekly: false,
  },
  setToken: (token: string) => set({ token }),
  setUser: async () => {
    const user = await fetchUserAPI();
    set({ user });
  },
}));
