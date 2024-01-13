import { create } from "zustand";
import { ChatbotQuestionsAndAnswers } from "../types/chatbot";
import { getQuestionsAndAnswersAPI } from "../api/chatbot.api";

type QuestionsAndAnswearsStore = {
  questionsAndAnswearsStore: ChatbotQuestionsAndAnswers;
  getNewQA: () => void;
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
  })
);
