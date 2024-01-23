import { useContext, useEffect, useRef, useState } from "react";
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

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [questionsAndAnswersStore.question.conversation]);

  if (questionsAndAnswersStore.error) {
    return <S.ErrorBox>Error: {questionsAndAnswersStore.error}</S.ErrorBox>;
  }

  return (
    <S.NotebookPage theme={theme}>
      <S.MessagesContainer>
        <S.Question>{questionsAndAnswersStore.question.title}</S.Question>
        <S.Subtitle>{questionsAndAnswersStore.question.subtitle}</S.Subtitle>
        {questionsAndAnswersStore.question &&
          questionsAndAnswersStore.question.conversation.map((entry, index) => (
            <S.Message key={index} role={entry.role} theme={theme}>
              {entry.content}
            </S.Message>
          ))}
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
