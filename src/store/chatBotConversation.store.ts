import { create } from "zustand";
import { ChatBotConversation } from "../types/chatbot";
import {
  getChatBotConversationAPI,
  deleteChatAPI,
  sendAnswerToChatAPI,
  deleteWeeklyAPI,
  sendAnswerToWeeklyChatAPI,
  getWeeklyChatBotConversationAPI,
} from "../api/chatbot.api";

type ChatBotConversationStore = {
  chatBotConversation: ChatBotConversation;
  getChatBotConversation: (conversationType: "daily" | "weekly") => void;
  sendAnswer: (answer: string, conversationType: "daily" | "weekly") => void;
  deleteChat: (conversationType: "daily" | "weekly") => Promise<boolean>;
};

export const useChatBotConversationStore = create<ChatBotConversationStore>(
  (set, get) => ({
    chatBotConversation: {
      conv_id: "",
      conversation: [],
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
      get().chatBotConversation.conversation.push({
        role: "user",
        content: answer,
      });
      set({ chatBotConversation: get().chatBotConversation });

      if (conversationType === "daily") {
        //daily
        const conversation = await sendAnswerToChatAPI(answer);
        set({ chatBotConversation: conversation });
      } else {
        const conversation = await sendAnswerToWeeklyChatAPI(answer);
        set({ chatBotConversation: conversation });
      }
    },
    deleteChat: async (conversationType: "daily" | "weekly") => {
      const conversation = {
        conv_id: "",
        conversation: [],
        finished: false,
        user_id: "",
      };
      set({ chatBotConversation: conversation });
      if (conversationType === "daily") {
        //daily
        await deleteChatAPI();
        const conversation = await getChatBotConversationAPI();
        set({ chatBotConversation: conversation });
      } else {
        await deleteWeeklyAPI();
        const conversation = await getWeeklyChatBotConversationAPI();
        set({ chatBotConversation: conversation });
      }
      return true;
    },
  })
);
