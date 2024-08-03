import React, { useEffect, useRef, useState } from "react";
import * as S from "./ChatBot.styles";
import { useChatBotConversationStore } from "../../store/chatBotConversation.store";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "../Typewriter/Typewriter";
import { WritingIndicator } from "../WritingIndicator/WritingIndicator";
import { useNavigate } from "react-router-dom";

// Props for the ChatBot component
type Props = {
  conversationType: "daily" | "weekly";
};

export const ChatBot: React.FC<Props> = ({ conversationType }) => {
  const {
    chatBotConversation,
    sendAnswer,
    getChatBotConversation,
    deleteChat,
  } = useChatBotConversationStore();
  const [newAnswer, setNewAnswer] = useState("");
  const [waitingForAnswer, setWaitingForAnswer] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const adjustHeight = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "1rem";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // If the last message in the conversation is not from the user, then we are waiting for an answer
  useEffect(() => {
    if (
      waitingForAnswer &&
      chatBotConversation[conversationType][
        chatBotConversation[conversationType].length - 1
      ].role !== "user"
    ) {
      setWaitingForAnswer(false);
    }
  }, [chatBotConversation[conversationType].length]);

  const handleSendAnswer = () => {
    sendAnswer(newAnswer, conversationType);
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
    if (chatBotConversation[conversationType].length === 0) {
      getChatBotConversation(conversationType);
    }

    scrollToBottom();
  }, [chatBotConversation[conversationType].length]);

  if (chatBotConversation.error) {
    return <S.ErrorBox>Error: {chatBotConversation.error}</S.ErrorBox>;
  }

  const handleEndConversation = () => {
    deleteChat(
      "goodbye (skip to session recap and goodbye step)",
      conversationType
    );

    navigate("/home");
  };

  return (
    <>
      <S.MessagesContainer>
        {chatBotConversation[conversationType].length > 0 &&
          chatBotConversation[conversationType].map((conv, index) =>
            conv?.role === "user" ? (
              <S.UserMessage key={index}>{conv.content}</S.UserMessage>
            ) : (
              <S.BotMessage key={index}>
                {index === chatBotConversation[conversationType].length - 1 ? (
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

      <S.EndConversationButtonContainer>
        <S.EndConversationButton onClick={handleEndConversation}>
          End Conversation
        </S.EndConversationButton>
      </S.EndConversationButtonContainer>

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
          <S.StyledFontAwesomeIcon icon={faPaperPlane} />
        </S.SendButton>
      </S.InputContainer>
    </>
  );
};
