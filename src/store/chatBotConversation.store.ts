import { create } from "zustand";
import { ChatBotConversation } from "../types/chatbot";
import {
  getChatBotConversationAPI,
  getDeleteChatAPI,
  sendAnswerToChatAPI,
} from "../api/chatbot.api";

type ChatBotConversationStore = {
  chatBotConversation: ChatBotConversation;
  getChatBotConversation: (conversationType: "daily" | "weekly") => void;
  sendAnswer: (answer: string, conversationType: "daily" | "weekly") => void;
  deleteChat: (conversationType: "daily" | "weekly") => void;
};

export const useChatBotConversationStore = create<ChatBotConversationStore>(
  (set, get) => ({
    chatBotConversation: {
      conversation: [],
      error: null,
    },

    getChatBotConversation: async (conversationType: "daily" | "weekly") => {
      const conversation = await getChatBotConversationAPI();

      set({ chatBotConversation: conversation });
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
      const conversation = await sendAnswerToChatAPI(answer);
      set({ chatBotConversation: conversation });
    },
    deleteChat: async (conversationType: "daily" | "weekly") => {
      const conversation = await getDeleteChatAPI();
      set({ chatBotConversation: conversation });
    },
  })
);
