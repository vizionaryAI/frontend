import React, { useEffect } from "react";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";
import { QuestionsAndAnswers } from "../QuestionsAndAnswers/QuestionsAndAnswers";
import { Loader } from "../Loader/Loader";
import * as S from "./Home.styles";
import { useNavigate } from "react-router-dom";
import { useClientStore } from "../../store/client.store";

export const Home = () => {
  const { questionsAndAnswers, getNewQA } = useQuestionsAndAnswersStore();
  const { user } = useClientStore();
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

          <S.Card
            disabled={!user.allow_weekly}
            onClick={() => user.allow_weekly && navigate("/weekly-reflection")}
          >
            Weekly Reflection
            {!user.weekly_open && <S.Notes>Open on Friday</S.Notes>}
            {user.weekly_completed && <S.Notes>Already completed</S.Notes>}
          </S.Card>
        </S.Container>
      ) : (
        <QuestionsAndAnswers />
      )}
    </React.Fragment>
  );
};
