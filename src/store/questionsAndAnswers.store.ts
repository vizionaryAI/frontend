import { create } from "zustand";
import { ChatbotQuestionsAndAnswers } from "../types/chatbot";
import { getQuestionsAndAnswersAPI, sendAnswerAPI } from "../api/chatbot.api";

type QuestionsAndAnswersStore = {
  questionsAndAnswersStore: ChatbotQuestionsAndAnswers;
  getNewQA: () => void;
  sendAnswer: (Answer: string) => void;
};

export const useQuestionsAndAnswersStore = create<QuestionsAndAnswersStore>(
  (set) => ({
    questionsAndAnswersStore: {
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

      set({ questionsAndAnswersStore: newQA });
    },
    sendAnswer: async (Answer: string) => {
      const newQA = await sendAnswerAPI(Answer);
      set({ questionsAndAnswersStore: newQA });
    },
  })
);
