import { ChatBot } from "../ChatBot/ChatBot";

export const WeeklyReflection = () => {
  return (
    <>
      <h1>Weekly Reflection</h1>
      <ChatBot conversationType="weekly" />
    </>
  );
};
