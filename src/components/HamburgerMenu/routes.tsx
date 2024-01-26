import { ReactNode } from "react";
import { Home } from "../Home/Home";
import { NewChat } from "../NewChat/NewChat";

type NavigationItem = {
  path: string;
  element: ReactNode;
  title: string;
};

export const routes: NavigationItem[] = [
  {
    path: "/home",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/home",
    element: <NewChat />,
    title: "New Chat",
  },
];
