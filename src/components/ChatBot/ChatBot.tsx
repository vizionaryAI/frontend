import React, { useEffect, useState } from "react";
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

  return (
    <S.ChatContainer>
      {questionsAndAnswersStore.question.conversation.map((conv, index) =>
        conv.role === "user" ? (
          <S.UserMessage key={index}>{conv.message}</S.UserMessage>
        ) : (
          <S.BotMessage key={index}>{conv.message}</S.BotMessage>
        )
      )}
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
