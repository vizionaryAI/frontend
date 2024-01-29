import { useContext, useEffect, useRef, useState } from "react";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";
import * as S from "./QuestionsAndAnswers.styles";
import { ThemeContext } from "styled-components";

import { WritingIndicator } from "../WritingIndicator/WritingIndicator";
import { Typewriter } from "../Typewriter/Typewriter";

export const QuestionsAndAnswers = () => {
  const theme = useContext(ThemeContext);
  const { questionsAndAnswers, getNewQA, sendAnswerToQuestion } =
    useQuestionsAndAnswersStore();
  const [newAnswer, setNewAnswer] = useState("");
  const [waitingForAnswer, setWaitingForAnswer] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  const adjustHeight = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "1em";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    getNewQA();
  }, []);

  // If the last message in the conversation is not from the user, then we are waiting for an answer
  useEffect(() => {
    if (
      waitingForAnswer &&
      questionsAndAnswers.question.conversation[
        questionsAndAnswers.question.conversation.length - 1
      ].role !== "user"
    ) {
      setWaitingForAnswer(false);
    }
  }, [questionsAndAnswers.question.conversation.length]);

  const handleSendAnswer = () => {
    sendAnswerToQuestion(newAnswer);
    setNewAnswer("");
    setWaitingForAnswer(true);
    setHasInteracted(true);
  };

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [questionsAndAnswers.question.conversation.length]);

  if (questionsAndAnswers.error) {
    return <S.ErrorBox>Error: {questionsAndAnswers.error}</S.ErrorBox>;
  }

  return (
    <S.NotebookPage theme={theme}>
      <S.MessagesContainer>
        <S.Question>{questionsAndAnswers.question.title}</S.Question>
        <S.Subtitle>{questionsAndAnswers.question.subtitle}</S.Subtitle>
        {questionsAndAnswers.question.conversation.length > 0 &&
          questionsAndAnswers.question.conversation.map((entry, index) => (
            <S.Message key={index} role={entry.role} theme={theme}>
              {entry.role !== "user" &&
              index === questionsAndAnswers.question.conversation.length - 1 ? (
                <Typewriter
                  text={entry.content}
                  enableVibration={hasInteracted}
                  onTextUpdate={scrollToBottom}
                  setIsTyping={setIsTyping}
                />
              ) : (
                entry.content
              )}
            </S.Message>
          ))}
        <div ref={endOfMessagesRef} />
        {waitingForAnswer && <WritingIndicator />}
      </S.MessagesContainer>
      {questionsAndAnswers.question.completed ? (
        <S.SendButton onClick={() => getNewQA()}>
          New Daily Reflection
        </S.SendButton>
      ) : (
        <S.InputContainer>
          <S.Input
            ref={inputRef}
            value={newAnswer}
            onChange={(e) => {
              setNewAnswer(e.currentTarget.value);
              adjustHeight();
            }}
            placeholder="New Answer, min 200 characters"
          />
          <S.SendButton
            disabled={isTyping || waitingForAnswer}
            onClick={handleSendAnswer}
          >
            Answer
          </S.SendButton>
        </S.InputContainer>
      )}
    </S.NotebookPage>
  );
};
