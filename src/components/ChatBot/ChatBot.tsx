import React, { useEffect, useRef, useState } from "react";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";
import * as S from "./ChatBot.styles";
import Button from "../Button/Button";

export const ChatBot: React.FC = () => {
  const { questionsAndAnswersStore, getNewQA, sendAnswer } =
    useQuestionsAndAnswersStore();
  const [newAnswer, setNewAnswer] = useState("");

  useEffect(() => {
    getNewQA();
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
  }, [questionsAndAnswersStore.question.conversation]);

  return (
    <S.ChatContainer>
      <S.MessagesContainer>
        {questionsAndAnswersStore.question.conversation.length > 0 &&
          questionsAndAnswersStore.question.conversation.map((conv, index) =>
            conv.role === "user" ? (
              <S.UserMessage key={index}>{conv.content}</S.UserMessage>
            ) : (
              <S.BotMessage key={index}>{conv.content}</S.BotMessage>
            )
          )}
        <div ref={endOfMessagesRef} />
      </S.MessagesContainer>
      {questionsAndAnswersStore.question.completed ? (
        <Button onClick={() => console.log("Next Question")}>
          Next Question
        </Button>
      ) : (
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
      )}
    </S.ChatContainer>
  );
};
