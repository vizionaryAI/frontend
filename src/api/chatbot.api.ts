import { api } from ".";
import {
  ChatBotConversation,
  ChatbotQuestionsAndAnswers,
} from "../types/chatbot";

export async function getQuestionsAndAnswersAPI(): Promise<ChatbotQuestionsAndAnswers> {
  try {
    const resp = await api.get(`api/v0/next`);
    return resp.data;
  } catch (error) {
    return {
      question: {
        title: "",
        subtitle: "",
        conversation: [],
        completed: false,
      },
      finished_all: false,
      error: "Something went wrong",
    };
  }
}

export async function sendAnswerToQuestionAPI(
  Answer: string
): Promise<ChatbotQuestionsAndAnswers> {
  try {
    const resp = await api.post(`api/v0/next`, { content: Answer });
    return resp.data;
  } catch (error) {
    return {
      question: {
        title: "",
        subtitle: "",
        conversation: [],
        completed: false,
      },
      finished_all: false,
      error: "Something went wrong",
    };
  }
}

export async function getChatBotConversationAPI(): Promise<ChatBotConversation> {
  try {
    const resp = await api.get(`api/v0/chat`);
    return resp.data;
  } catch (error) {
    return {
      conversation: [],
      error: "Failed to fetch chat conversation",
    };
  }
}

export async function sendAnswerToChatAPI(
  Answer: string
): Promise<ChatBotConversation> {
  try {
    const resp = await api.post(`api/v0/chat`, { content: Answer });
    return resp.data;
  } catch (error) {
    return {
      conversation: [],
      error: "Failed to send Answer",
    };
  }
}

export async function getDeleteChatAPI(): Promise<ChatBotConversation> {
  try {
    const resp = await api.delete(`api/v0/chat`);
    return resp.data;
  } catch (error) {
    return {
      conversation: [],
      error: "Failed to delete chat conversation",
    };
  }
}
