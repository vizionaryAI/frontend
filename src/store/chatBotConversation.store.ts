import { create } from "zustand";
import { ChatBotConversation } from "../types/chatbot";
import {
  getChatBotConversationAPI,
  sendAnswerToChatAPI,
  sendAnswerToWeeklyChatAPI,
  getWeeklyChatBotConversationAPI,
} from "../api/chatbot.api";

type ChatBotConversationStore = {
  chatBotConversation: ChatBotConversation;
  getChatBotConversation: (conversationType: "daily" | "weekly") => void;
  sendAnswer: (answer: string, conversationType: "daily" | "weekly") => void;
  deleteChat: (answer: string, conversationType: string) => void;
};

export const useChatBotConversationStore = create<ChatBotConversationStore>(
  (set, get) => ({
    chatBotConversation: {
      conv_id: "",
      daily: [],
      weekly: [],
      finished: false,
      user_id: "",
    },

    getChatBotConversation: async (conversationType: "daily" | "weekly") => {
      if (conversationType === "daily") {
        //daily
        const conversation = await getChatBotConversationAPI();

        set({ chatBotConversation: conversation });
      } else {
        const conversation = await getWeeklyChatBotConversationAPI();
        set({ chatBotConversation: conversation });
      }
    },
    sendAnswer: async (
      answer: string,
      conversationType: "daily" | "weekly"
    ) => {
      get().chatBotConversation[conversationType].push({
        role: "user",
        content: answer,
      });

      if (conversationType === "daily") {
        //daily
        const conversation = await sendAnswerToChatAPI(answer);
        set({ chatBotConversation: conversation });
      } else {
        const conversation = await sendAnswerToWeeklyChatAPI(answer);
        set({ chatBotConversation: conversation });
      }
    },
    deleteChat: (answer: string, conversationType: string) => {
      if (conversationType === "daily" || conversationType === "shortchat") {
        sendAnswerToChatAPI(answer);
      } else {
        sendAnswerToWeeklyChatAPI(answer);
      }

      const conversation = {
        conv_id: "",
        daily: [],
        weekly: [],
        finished: false,
        user_id: "",
      };

      set({ chatBotConversation: conversation });
    },
  })
);
