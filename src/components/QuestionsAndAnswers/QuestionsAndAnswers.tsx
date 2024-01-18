import { useContext, useEffect, useState } from "react";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";
import * as S from "./QuestionsAndAnswers.styles";
import { ThemeContext } from "styled-components";
import Button from "../Button/Button";

export const QuestionsAndAnswers = () => {
  const theme = useContext(ThemeContext);
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

  if (questionsAndAnswersStore.error) {
    return <S.ErrorBox>Error: {questionsAndAnswersStore.error}</S.ErrorBox>;
  }

  return (
    <S.NotebookPage theme={theme}>
      <S.Question>{questionsAndAnswersStore.question.title}</S.Question>
      <S.Subtitle>{questionsAndAnswersStore.question.subtitle}</S.Subtitle>
      {questionsAndAnswersStore.question.conversation.map((entry, index) => (
        <S.Message key={index} role={entry.role} theme={theme}>
          {entry.message}
        </S.Message>
      ))}
      {questionsAndAnswersStore.question.completed ? (
        <Button onClick={() => console.log("Next Question")}>
          Next Question
        </Button>
      ) : (
        <>
          <S.Input
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.currentTarget.value)}
            placeholder="New Answer, min 200 characters"
          />
          <Button disabled={newAnswer.length < 200} onClick={handleSendAnswer}>
            Answer
          </Button>
        </>
      )}
    </S.NotebookPage>
  );
};
