import { useContext, useEffect, useRef, useState } from "react";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";
import * as S from "./QuestionsAndAnswers.styles";
import { ThemeContext } from "styled-components";
import Button from "../Button/Button";

export const QuestionsAndAnswers = () => {
  const theme = useContext(ThemeContext);
  const { questionsAndAnswers, getNewQA, sendAnswerToQuestion } =
    useQuestionsAndAnswersStore();
  const [newAnswer, setNewAnswer] = useState("");

  useEffect(() => {
    getNewQA();
  }, []);

  const handleSendAnswer = () => {
    sendAnswerToQuestion(newAnswer);
    setNewAnswer("");
  };

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [questionsAndAnswers.question.conversation]);

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
              {entry.content}
            </S.Message>
          ))}
        <div ref={endOfMessagesRef} />
      </S.MessagesContainer>
      {questionsAndAnswers.question.completed ? (
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
            disabled={newAnswer.length < 200}
            onClick={handleSendAnswer}
          >
            Answer
          </S.SendButton>
        </S.InputContainer>
      )}
    </S.NotebookPage>
  );
};
