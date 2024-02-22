import { ChatBot } from "../ChatBot/ChatBot";
import * as S from "./WeeklyReflection.styles";

export const WeeklyReflection = () => {
  return (
    <>
      <S.Title>Weekly Reflection</S.Title>
      <ChatBot conversationType="weekly" />
    </>
  );
};
