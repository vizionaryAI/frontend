import { ReactNode } from "react";
import { Home } from "../Home/Home";
import { NewChat } from "../NewChat/NewChat";
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
    title: "Daily Reflection",
  },
  {
    path: "/weekly-reflection",
    element: <WeeklyReflection />,
    title: "Weekly Reflection",
  },
  {
    path: "/daily-reflection",
    element: <NewChat />,
    title: "New Daily Reflection",
  },
];
