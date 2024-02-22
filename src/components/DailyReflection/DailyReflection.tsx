import { ChatBot } from "../ChatBot/ChatBot";

export const DailyReflection = () => {
  return (
    <>
      <h1>Daily Reflection</h1>
      <ChatBot conversationType="daily" />
    </>
  );
};
