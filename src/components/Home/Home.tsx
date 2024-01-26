import React, { useEffect } from "react";
import { useQuestionsAndAnswersStore } from "../../store/questionsAndAnswers.store";
import { ChatBot } from "../ChatBot/ChatBot";
import { QuestionsAndAnswers } from "../QuestionsAndAnswers/QuestionsAndAnswers";

export const Home = () => {
  const { questionsAndAnswers, getNewQA } = useQuestionsAndAnswersStore();

  useEffect(() => {
    getNewQA();
  }, []);

  return (
    <React.Fragment>
      {!questionsAndAnswers.finished_all ? (
        <ChatBot />
      ) : (
        <QuestionsAndAnswers />
      )}
    </React.Fragment>
  );
};
