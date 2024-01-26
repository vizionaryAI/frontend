import React, { useEffect, useRef, useState } from "react";
import * as S from "./ChatBot.styles";
import { useChatBotConversationStore } from "../../store/chatBotConversation.store";

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
  }, [chatBotConversation.conversation]);

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
          placeholder="New Answer, min 200 characters"
        />
        <S.SendButton
          disabled={newAnswer.length < 10}
          onClick={handleSendAnswer}
        >
          Answer
        </S.SendButton>
      </S.InputContainer>
    </S.ChatContainer>
  );
};
