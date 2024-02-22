import { create } from "zustand";

type User = {
  isPremium: boolean;
};

type ClientStore = {
  token: string;
  user: User;
  setToken: (token: string) => void;
  setUser: () => void;
};

export const useClientStore = create<ClientStore>((set) => ({
  token: "",
  user: {
    isPremium: false,
  },
  setToken: (token: string) => set({ token }),
  setUser: () => {
    //const user = await fetchUser();
    const user = {
      isPremium: true,
    };
    set({ user });
  },
}));
