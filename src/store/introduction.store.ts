import { create } from "zustand";
import { IntroConversation } from "../types/chatbot";
import { getIntroductionAPI, sendIntroductionAPI } from "../api/chatbot.api";

type IntroductionStore = {
  introduction: IntroConversation;
  getIntroduction: () => void;
  sendIntroduction: (answer: string) => void;
};

export const useIntroductionStore = create<IntroductionStore>((set, get) => ({
  introduction: {
    conv_id: "",
    conversation: [],
    finished: false,
    user_id: "",
  },

  getIntroduction: async () => {
    const conversation = await getIntroductionAPI();
    set({ introduction: conversation });
  },
  sendIntroduction: async (answer: string) => {
    get().introduction.conversation.push({
      role: "user",
      content: answer,
    });
    set({ introduction: get().introduction });

    const conversation = await sendIntroductionAPI(answer);
    set({ introduction: conversation });
  },
}));
