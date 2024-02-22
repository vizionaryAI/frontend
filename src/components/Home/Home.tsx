import React, { useEffect } from "react";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";
import { QuestionsAndAnswers } from "../QuestionsAndAnswers/QuestionsAndAnswers";
import { Loader } from "../Loader/Loader";
import * as S from "./Home.styles";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { questionsAndAnswers, getNewQA } = useQuestionsAndAnswersStore();
  const navigate = useNavigate();

  useEffect(() => {
    getNewQA();
  }, []);

  if (
    !questionsAndAnswers.error &&
    questionsAndAnswers.question?.title.length === 0 && //TODO: add init state
    !questionsAndAnswers.finished_all
  ) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      {questionsAndAnswers.finished_all ? (
        <S.Container>
          <S.Card onClick={() => navigate("/daily-reflection")}>
            Daily Reflection
          </S.Card>
          <S.Card onClick={() => navigate("/weekly-reflection")}>
            Weekly Reflection
          </S.Card>
        </S.Container>
      ) : (
        <QuestionsAndAnswers />
      )}
    </React.Fragment>
  );
};
