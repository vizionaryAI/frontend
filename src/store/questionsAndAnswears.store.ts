import { create } from "zustand";
import { ChatbotQuestionsAndAnswers } from "../types/chatbot";
import { getQuestionsAndAnswersAPI, sendAnswerAPI } from "../api/chatbot.api";

type QuestionsAndAnswearsStore = {
  questionsAndAnswearsStore: ChatbotQuestionsAndAnswers;
  getNewQA: () => void;
  sendAnswer: (answer: string) => void;
};

export const useQuestionsAndAnswearsStore = create<QuestionsAndAnswearsStore>(
  (set) => ({
    questionsAndAnswearsStore: {
      question: {
        title: "",
        subtitle: "",
        conversation: [],
        completed: false,
      },
      finished_all: false,
      error: null,
    },

    getNewQA: async () => {
      const newQA = await getQuestionsAndAnswersAPI();
      set({ questionsAndAnswearsStore: newQA });
    },
    sendAnswer: async (answer: string) => {
      const newQA = await sendAnswerAPI(answer);
      set({ questionsAndAnswearsStore: newQA });
    },
  })
);
