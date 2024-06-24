import { useState } from "react";
import { useClientStore } from "../../store/client.store";
import { ChatBot } from "../ChatBot/ChatBot";
import { UserWarning } from "../UserWarning/UserWarning";
import VoiceMessage from "../VoiceMessage/VoiceMessage";

import * as S from "./DailyReflection.styles";

export const DailyReflection = () => {
  const { user } = useClientStore();
  const [isVoiceMessage, setIsVoiceMessage] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsVoiceMessage(!isVoiceMessage);
  };

  return (
    <>
      <S.Container>
        <S.Title>Daily Reflection</S.Title>
        {user.content_monitored_warning && (
          <UserWarning message="All messages sent can be seen by your organization's administrator. Please do not put any sensitive information like passwords into the chatbox!" />
        )}
      </S.Container>
      <S.SwitchContainer onClick={toggleSwitch}>
        <S.HiddenCheckbox type="checkbox" checked={isVoiceMessage} readOnly />
        <S.SwitchLabel isActive={isVoiceMessage}>
          <S.SwitchButton isActive={isVoiceMessage} />
        </S.SwitchLabel>
      </S.SwitchContainer>
      {isVoiceMessage ? <VoiceMessage /> : <ChatBot conversationType="daily" />}
    </>
  );
};
