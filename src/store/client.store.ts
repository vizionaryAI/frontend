import { create } from "zustand";

type ClientStore = {
  token: string;
  setToken: (token: string) => void;
};

export const useClientStore = create<ClientStore>((set) => ({
  token: "",
  setToken: (token: string) => set({ token }),
}));
