import { useState } from "react";
import { useClientStore } from "../../store/client.store";
import { ChatBot } from "../ChatBot/ChatBot";
import { UserWarning } from "../UserWarning/UserWarning";
import VoiceMessage from "../VoiceMessage/VoiceMessage";

import * as S from "./Reflection.styles";
import { useChatBotConversationStore } from "../../store/chatBotConversation.store";

type Props = {
  reflectionType: "daily" | "weekly";
};

export const Reflection: React.FC<Props> = ({ reflectionType }) => {
  const { user } = useClientStore();
  const [isVoiceMessage, setIsVoiceMessage] = useState<boolean>(false);
  const { getChatBotConversation } = useChatBotConversationStore();

  const toggleSwitch = () => {
    getChatBotConversation(reflectionType);
    setIsVoiceMessage(!isVoiceMessage);
  };

  return (
    <>
      <S.Container>
        <S.Title>
          {reflectionType === "daily" ? "Daily" : "Weekly"} Reflection
        </S.Title>
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
      {isVoiceMessage ? (
        <VoiceMessage
          voiceApi={reflectionType === "daily" ? "reflection" : "reflection"}
        />
      ) : (
        <ChatBot conversationType={reflectionType} />
      )}
    </>
  );
};
