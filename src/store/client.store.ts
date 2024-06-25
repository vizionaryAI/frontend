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
    name: "",
    email: "",
    admin: false,
    premium: true,
    weekly_open: false,
    allow_weekly: false,
    weekly_completed: false,
    active_conversation: false,
    introduction_completed: false,
    content_monitored_warning: false,
  },
  setToken: (token: string) => set({ token }),
  setUser: async () => {
    const user = await fetchUserAPI();
    set({ user });
  },
}));
