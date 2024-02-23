import { useClientStore } from "../../store/client.store";
import { ChatBot } from "../ChatBot/ChatBot";
import { UserWarning } from "../UserWarning/UserWarning";
import * as S from "./DailyReflection.styles";

export const DailyReflection = () => {
  const { user } = useClientStore();
  return (
    <>
      <S.Container>
        <S.Title>Daily Reflection</S.Title>
        {user.content_monitored_warning && (
          <UserWarning message="All messages sent can be seen by your organization's administrator. Please do not put any sensitive information like passwords into the chatbox!" />
        )}
      </S.Container>
      <ChatBot conversationType="daily" />
    </>
  );
};
