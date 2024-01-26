import { create } from "zustand";
import { ChatbotQuestionsAndAnswers } from "../types/chatbot";
import {
  getQuestionsAndAnswersAPI,
  sendAnswerToQuestionAPI,
} from "../api/chatbot.api";

type QuestionsAndAnswersStore = {
  questionsAndAnswers: ChatbotQuestionsAndAnswers;
  getNewQA: () => void;
  sendAnswerToQuestion: (Answer: string) => void;
};

export const useQuestionsAndAnswersStore = create<QuestionsAndAnswersStore>(
  (set, get) => ({
    questionsAndAnswers: {
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

      set({ questionsAndAnswers: newQA });
    },
    sendAnswerToQuestion: async (Answer: string) => {
      get().questionsAndAnswers.question.conversation.push({
        role: "user",
        content: Answer,
      });
      set({ questionsAndAnswers: get().questionsAndAnswers });

      const newQA = await sendAnswerToQuestionAPI(Answer);
      set({ questionsAndAnswers: newQA });
    },
  })
);
