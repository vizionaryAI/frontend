import { useEffect, useRef, useState } from "react";
import * as S from "./Introduction.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "../Typewriter/Typewriter";
import { WritingIndicator } from "../WritingIndicator/WritingIndicator";
import { useNavigate } from "react-router-dom";
import { useIntroductionStore } from "../../store/introduction.store";
import VoiceMessage from "../VoiceMessage/VoiceMessage";
import { useClientStore } from "../../store/client.store";
import { Switch } from "../Switch/Switch";
import { UserWarning } from "../UserWarning/UserWarning";

export const Introduction = () => {
  const { user } = useClientStore();
  const { introduction, sendIntroduction, getIntroduction } =
    useIntroductionStore();
  const { setUser } = useClientStore();
  const [newAnswer, setNewAnswer] = useState("");
  const [waitingForAnswer, setWaitingForAnswer] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const [isVoiceMessage, setIsVoiceMessage] = useState<boolean>(true);
  const [firstUse, setFirstUse] = useState(true); //user profile

  useEffect(() => {
    getIntroduction();
  }, []);

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
      introduction.conversation[introduction.conversation.length - 1].role !==
        "user"
    ) {
      setWaitingForAnswer(false);
    }
  }, [introduction.conversation.length]);

  const handleSendAnswer = () => {
    sendIntroduction(newAnswer);
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
  }, [introduction.conversation.length]);

  const toggleSwitch = () => {
    getIntroduction();
    setIsVoiceMessage(!isVoiceMessage);
  };

  const handleEndConversation = () => {
    setUser();
    navigate("/home");
  };

  if (introduction.error) {
    return <S.ErrorBox>Error: {introduction.error}</S.ErrorBox>;
  }

  return (
    <S.Container>
      <S.Title>Introduction</S.Title>
      <S.SwitchContainer>
        <Switch setSwitch={toggleSwitch} isVoiceMessage={isVoiceMessage} />
      </S.SwitchContainer>
      {user.content_monitored_warning && (
        <UserWarning message="All messages sent can be seen by your organization's administrator. Please do not put any sensitive information like passwords into the chatbox!" />
      )}
      {isVoiceMessage ? (
        <VoiceMessage
          voiceApi="introduction"
          firstUse={firstUse}
          setFirstUse={setFirstUse}
        />
      ) : (
        <>
          <S.MessagesContainer>
            {introduction.conversation.length > 0 &&
              introduction.conversation.map((conv, index) =>
                conv?.role === "user" ? (
                  <S.UserMessage key={index}>{conv.content}</S.UserMessage>
                ) : (
                  <S.BotMessage key={index}>
                    {index === introduction.conversation.length - 1 ? (
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
          {introduction.finished && (
            <S.EndConversationButtonContainer>
              <S.EndConversationButton onClick={handleEndConversation}>
                End conversation
              </S.EndConversationButton>
            </S.EndConversationButtonContainer>
          )}
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
        </>
      )}
    </S.Container>
  );
};
