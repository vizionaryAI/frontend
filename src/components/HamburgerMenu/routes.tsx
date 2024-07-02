import { ReactNode } from "react";
import { Home } from "../Home/Home";
import { Reflection } from "../Reflection/Reflection";

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
    path: "/daily-reflection",
    element: <Reflection reflectionType="daily" />,
    title: "Short Session",
  },
  {
    path: "/weekly-reflection",
    element: <Reflection reflectionType="weekly" />,
    title: "Weekly Session",
  },
];
