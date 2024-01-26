import { create } from "zustand";
import { ChatBotConversation } from "../types/chatbot";
import {
  getChatBotConversationAPI,
  sendAnswerToChatAPI,
} from "../api/chatbot.api";

type ChatBotConversationStore = {
  chatBotConversation: ChatBotConversation;
  getChatBotConversation: () => void;
  sendAnswer: (Answer: string) => void;
};

export const useChatBotConversationStore = create<ChatBotConversationStore>(
  (set, get) => ({
    chatBotConversation: {
      conversation: [],
      error: null,
    },

    getChatBotConversation: async () => {
      const conversation = await getChatBotConversationAPI();

      set({ chatBotConversation: conversation });
    },
    sendAnswer: async (Answer: string) => {
      get().chatBotConversation.conversation.push({
        role: "user",
        content: Answer,
      });
      set({ chatBotConversation: get().chatBotConversation });
      const conversation = await sendAnswerToChatAPI(Answer);
      set({ chatBotConversation: conversation });
    },
  })
);
