import { ChatBot } from "../ChatBot/ChatBot";
import * as S from "./DailyReflection.styles";

export const DailyReflection = () => {
  return (
    <>
      <S.Title>Daily Reflection</S.Title>
      <ChatBot conversationType="daily" />
    </>
  );
};
