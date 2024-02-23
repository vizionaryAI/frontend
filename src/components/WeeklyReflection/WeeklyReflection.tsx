import { ChatBot } from "../ChatBot/ChatBot";
import { UserWarning } from "../UserWarning/UserWarning";
import * as S from "./WeeklyReflection.styles";

export const WeeklyReflection = () => {
  return (
    <>
      <S.Container>
        <S.Title>Weekly Reflection</S.Title>
        <UserWarning message="All messages sent can be seen by your organization's administrator. Please do not put any sensitive information like passwords into the chatbox!" />
      </S.Container>
      <ChatBot conversationType="weekly" />
    </>
  );
};
