import React, { useEffect } from "react";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";
import { ChatBot } from "../ChatBot/ChatBot";
import { QuestionsAndAnswers } from "../QuestionsAndAnswers/QuestionsAndAnswers";
import { Loader } from "../Loader/Loader";

export const Home = () => {
  const { questionsAndAnswers, getNewQA } = useQuestionsAndAnswersStore();

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
      {questionsAndAnswers.finished_all ? <ChatBot /> : <QuestionsAndAnswers />}
    </React.Fragment>
  );
};
