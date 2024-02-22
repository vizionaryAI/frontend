import { ReactNode } from "react";
import { Home } from "../Home/Home";
import { DailyReflection } from "../DailyReflection/DailyReflection";
import { WeeklyReflection } from "../WeeklyReflection/WeeklyReflection";

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
    element: <DailyReflection />,
    title: "New Daily Reflection",
  },
  {
    path: "/weekly-reflection",
    element: <WeeklyReflection />,
    title: "New Weekly Reflection",
  },
];
