import React, { useEffect } from "react";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";
import * as S from "./ChatBot.styles";

export const ChatBot: React.FC = () => {
  const { questionsAndAnswersStore, getNewQA } = useQuestionsAndAnswersStore();

  useEffect(() => {
    getNewQA();
  }, []);
  return (
    <S.ChatContainer>
      {questionsAndAnswersStore.question.conversation.map((conv, index) =>
        conv.role === "user" ? (
          <S.UserMessage key={index}>{conv.message}</S.UserMessage>
        ) : (
          <S.BotMessage key={index}>{conv.message}</S.BotMessage>
        )
      )}
      {questionsAndAnswersStore.finished_all && <p>All questions completed.</p>}
      {questionsAndAnswersStore.error && (
        <p>Error: {questionsAndAnswersStore.error}</p>
      )}
    </S.ChatContainer>
  );
};
