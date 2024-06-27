import { useState } from "react";
import { useClientStore } from "../../store/client.store";
import { ChatBot } from "../ChatBot/ChatBot";
import { UserWarning } from "../UserWarning/UserWarning";
import VoiceMessage from "../VoiceMessage/VoiceMessage";

import * as S from "./Reflection.styles";
import { useChatBotConversationStore } from "../../store/chatBotConversation.store";
import { Switch } from "../Switch/Switch";

type Props = {
  reflectionType: "daily" | "weekly";
};

export const Reflection: React.FC<Props> = ({ reflectionType }) => {
  const { user } = useClientStore();
  const [isVoiceMessage, setIsVoiceMessage] = useState<boolean>(true);
  const { getChatBotConversation } = useChatBotConversationStore();
  const [firstUse, setFirstUse] = useState(false); //user profile

  const toggleSwitch = () => {
    getChatBotConversation(reflectionType);
    setIsVoiceMessage(!isVoiceMessage);
  };

  return (
    <S.Container>
      {user.content_monitored_warning && (
        <UserWarning message="All messages sent can be seen by your organization's administrator. Please do not put any sensitive information like passwords into the chatbox!" />
      )}
      <S.SwitchContainer>
        <Switch setSwitch={toggleSwitch} isVoiceMessage={isVoiceMessage} />
      </S.SwitchContainer>
      {isVoiceMessage ? (
        <VoiceMessage
          voiceApi={reflectionType === "daily" ? "reflection" : "reflection"}
          firstUse={firstUse}
          setFirstUse={setFirstUse}
        />
      ) : (
        <ChatBot conversationType={reflectionType} />
      )}
    </S.Container>
  );
};
