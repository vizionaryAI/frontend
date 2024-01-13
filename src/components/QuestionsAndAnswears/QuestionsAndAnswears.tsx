import { useContext, useEffect, useState } from "react";
import { useQuestionsAndAnswearsStore } from "../../store/questionsAndAnswears.store";
import * as S from "./QuestionsAndAnswears.styles";
import { ThemeContext } from "styled-components";
import Button from "../Button/Button";

export const QuestionsAndAnswears = () => {
  const theme = useContext(ThemeContext);
  const { questionsAndAnswearsStore, getNewQA, sendAnswer } =
    useQuestionsAndAnswearsStore();
  const [newAnswer, setNewAnswer] = useState("");
  useEffect(() => {
    getNewQA();
  }, []);

  const handleSendAnswer = () => {
    sendAnswer(newAnswer);
    setNewAnswer("");
  };

  if (questionsAndAnswearsStore.error) {
    return <S.ErrorBox>Error: {questionsAndAnswearsStore.error}</S.ErrorBox>;
  }

  return (
    <S.NotebookPage theme={theme}>
      <S.Question>{questionsAndAnswearsStore.question.title}</S.Question>
      <S.Subtitle>{questionsAndAnswearsStore.question.subtitle}</S.Subtitle>
      {questionsAndAnswearsStore.question.conversation.map((entry, index) => (
        <S.Message key={index} role={entry.role} theme={theme}>
          {entry.message}
        </S.Message>
      ))}
      {questionsAndAnswearsStore.question.completed ? (
        <Button onClick={() => console.log("Next Question")}>
          Next Question
        </Button>
      ) : (
        <>
          <S.Input
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.currentTarget.value)}
            placeholder="New answer"
          />
          <Button disabled={newAnswer.length < 1} onClick={handleSendAnswer}>
            Answear
          </Button>
        </>
      )}
    </S.NotebookPage>
  );
};
