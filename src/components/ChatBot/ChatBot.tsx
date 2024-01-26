import React, { useEffect, useRef, useState } from "react";
import * as S from "./ChatBot.styles";
import { useChatBotConversationStore } from "../../store/chatBotConversation.store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const ChatBot: React.FC = () => {
  const { chatBotConversation, getChatBotConversation, sendAnswer } =
    useChatBotConversationStore();
  const [newAnswer, setNewAnswer] = useState("");

  useEffect(() => {
    getChatBotConversation();
  }, []);

  const handleSendAnswer = () => {
    sendAnswer(newAnswer);
    setNewAnswer("");
  };

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatBotConversation.conversation.length]);

  if (chatBotConversation.error) {
    return <S.ErrorBox>Error: {chatBotConversation.error}</S.ErrorBox>;
  }

  return (
    <S.ChatContainer>
      <S.MessagesContainer>
        {chatBotConversation.conversation.length > 0 &&
          chatBotConversation.conversation.map((conv, index) =>
            conv.role === "user" ? (
              <S.UserMessage key={index}>{conv.content}</S.UserMessage>
            ) : (
              <S.BotMessage key={index}>{conv.content}</S.BotMessage>
            )
          )}
        <div ref={endOfMessagesRef} />
      </S.MessagesContainer>
      <S.InputContainer>
        <S.Input
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.currentTarget.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendAnswer();
            }
          }}
          placeholder="Write a message..."
        />
        <S.SendButton onClick={handleSendAnswer}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </S.SendButton>
      </S.InputContainer>
    </S.ChatContainer>
  );
};
