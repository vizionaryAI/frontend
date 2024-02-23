import { ChatBot } from "../ChatBot/ChatBot";
import { UserWarning } from "../UserWarning/UserWarning";
import * as S from "./DailyReflection.styles";

export const DailyReflection = () => {
  return (
    <>
      <S.Container>
        <S.Title>Daily Reflection</S.Title>
        <UserWarning message="All messages sent can be seen by your organization's administrator. Please do not put any sensitive information like passwords into the chatbox!" />
      </S.Container>
      <ChatBot conversationType="daily" />
    </>
  );
};
