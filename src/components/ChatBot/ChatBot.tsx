import React, { useEffect, useRef, useState } from "react";
import * as S from "./ChatBot.styles";
import { useChatBotConversationStore } from "../../store/chatBotConversation.store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "../Typewriter/Typewriter";
import { WritingIndicator } from "../WritingIndicator/WritingIndicator";

export const ChatBot: React.FC = () => {
  const { chatBotConversation, getChatBotConversation, sendAnswer } =
    useChatBotConversationStore();
  const [newAnswer, setNewAnswer] = useState("");
  const [waitingForAnswer, setWaitingForAnswer] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "1rem";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    getChatBotConversation();
  }, []);

  // If the last message in the conversation is not from the user, then we are waiting for an answer
  useEffect(() => {
    if (
      waitingForAnswer &&
      chatBotConversation.conversation[
        chatBotConversation.conversation.length - 1
      ].role !== "user"
    ) {
      setWaitingForAnswer(false);
    }
  }, [chatBotConversation.conversation.length]);

  const handleSendAnswer = () => {
    sendAnswer(newAnswer);
    setNewAnswer("");
    setWaitingForAnswer(true);
    setHasInteracted(true);
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "2rem";
    }
  };

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "auto" });
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
            conv?.role === "user" ? (
              <S.UserMessage key={index}>{conv.content}</S.UserMessage>
            ) : (
              <S.BotMessage key={index}>
                {index === chatBotConversation.conversation.length - 1 ? (
                  <Typewriter
                    text={conv.content}
                    enableVibration={hasInteracted}
                    onTextUpdate={scrollToBottom}
                    setIsTyping={setIsTyping}
                  />
                ) : (
                  conv.content
                )}
              </S.BotMessage>
            )
          )}
        <div ref={endOfMessagesRef} />
        {waitingForAnswer && (
          <S.WritingIndicatorContainer>
            <WritingIndicator />
          </S.WritingIndicatorContainer>
        )}
      </S.MessagesContainer>
      <S.InputContainer>
        <S.Input
          ref={inputRef}
          value={newAnswer}
          onChange={(e) => {
            setNewAnswer(e.currentTarget.value);
            adjustHeight();
          }}
          placeholder="Write a message..."
        />

        <S.SendButton
          disabled={isTyping || waitingForAnswer || newAnswer.length < 1}
          onClick={handleSendAnswer}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </S.SendButton>
      </S.InputContainer>
    </S.ChatContainer>
  );
};
