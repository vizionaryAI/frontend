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
  const { user, setUser } = useClientStore();
  const [isVoiceMessage, setIsVoiceMessage] = useState<boolean>(true);
  const { getChatBotConversation, deleteChat } = useChatBotConversationStore();
  const [sessionIsStarted, setSessionIsStarted] = useState(false);

  const toggleSwitch = () => {
    getChatBotConversation(reflectionType);
    setIsVoiceMessage(!isVoiceMessage);
  };

  return (
    <S.BGContainer>
      <S.Container>
        <S.SwitchContainer>
          <Switch setSwitch={toggleSwitch} isVoiceMessage={isVoiceMessage} />
        </S.SwitchContainer>
        {user.content_monitored_warning && (
          <UserWarning message="All messages sent can be seen by your organization's administrator. Please do not put any sensitive information like passwords into the chatbox!" />
        )}

        {isVoiceMessage ? (
          <VoiceMessage
            deleteChat={deleteChat}
            conversationType={
              reflectionType === "daily" ? "shortchat" : "reflection"
            }
            firstUse={user.first_session}
            sessionIsStarted={sessionIsStarted}
            setSessionIsStarted={setSessionIsStarted}
            updateUserProfile={setUser}
          />
        ) : (
          <ChatBot conversationType={reflectionType} />
        )}
      </S.Container>
    </S.BGContainer>
  );
};
