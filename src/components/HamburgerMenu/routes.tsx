import { ReactNode } from "react";
import { QuestionsAndAnswers } from "../QuestionsAndAnswers/QuestionsAndAnswers";
import { ChatBot } from "../ChatBot/ChatBot";

type NavigationItem = {
  path: string;
  element: ReactNode;
  title: string;
};

export const routes: NavigationItem[] = [
  {
    path: "/home",
    element: <QuestionsAndAnswers />,
    title: "Home",
  },
  {
    path: "/chatbot",
    element: <ChatBot />,
    title: "ChatBot",
  },
];
