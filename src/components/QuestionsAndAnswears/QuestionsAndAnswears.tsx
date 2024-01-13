import { useContext, useEffect } from "react";
import { useQuestionsAndAnswearsStore } from "../../store/questionsAndAnswears.store";
import * as S from "./QuestionsAndAnswears.styles";
import { ThemeContext } from "styled-components";

export const QuestionsAndAnswears = () => {
  const theme = useContext(ThemeContext);
  const { questionsAndAnswearsStore, getNewQA } =
    useQuestionsAndAnswearsStore();
  useEffect(() => {
    getNewQA();
  }, []);
  if (questionsAndAnswearsStore.error) {
    return <S.ErrorBox>Error: {questionsAndAnswearsStore.error}</S.ErrorBox>;
  }

  return (
    <S.NotebookPage theme={theme}>
      <S.Question>{questionsAndAnswearsStore.question.title}</S.Question>
      <S.Subtitle>{questionsAndAnswearsStore.question.subtitle}</S.Subtitle>
      {questionsAndAnswearsStore.question.conversation.map((entry, index) => (
        <S.Message key={index} isUser={entry.sender === "user"} theme={theme}>
          {entry.message}
        </S.Message>
      ))}
    </S.NotebookPage>
  );
};
