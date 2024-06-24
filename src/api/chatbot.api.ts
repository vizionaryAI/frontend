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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendVoiceMessage(audioBlob: Blob): Promise<any> {
  try {
    const formData = new FormData();
    formData.append("file", audioBlob, "voice-message.wav");

    const response = await api.post("api/v1/reflection/tts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    });

    return response;
  } catch (error) {
    console.log("failed to send voice message", error);
    throw error;
  }
}

export async function getChatBotConversationAPI(): Promise<ChatBotConversation> {
  try {
    const resp = await api.get(`api/v1/reflection/chat`);
    return resp.data;
  } catch (error) {
    return {
      conversation: [],
      error: "Failed to fetch chat conversation",
      finished: false,
    };
  }
}

export async function sendAnswerToChatAPI(
  Answer: string
): Promise<ChatBotConversation> {
  try {
    const resp = await api.post(`api/v1/reflection/chat`, { content: Answer });
    return resp.data;
  } catch (error) {
    return {
      conversation: [],
      error: "Failed to send Answer",
      finished: false,
    };
  }
}

export async function deleteChatAPI(): Promise<ChatBotConversation> {
  try {
    const resp = await api.delete(`api/v0/chat`);
    return resp.data;
  } catch (error) {
    return {
      conversation: [],
      error: "Failed to delete chat conversation",
      finished: false,
    };
  }
}

export async function getWeeklyChatBotConversationAPI(): Promise<ChatBotConversation> {
  try {
    const resp = await api.get(`api/v0/weekly`);
    return resp.data;
  } catch (error) {
    return {
      conversation: [],
      error: "Failed to fetch chat conversation",
      finished: false,
    };
  }
}

export async function sendAnswerToWeeklyChatAPI(
  Answer: string
): Promise<ChatBotConversation> {
  try {
    const resp = await api.post(`api/v0/weekly`, { content: Answer });
    return resp.data;
  } catch (error) {
    return {
      conversation: [],
      error: "Failed to send Answer",
      finished: false,
    };
  }
}

export async function deleteWeeklyAPI(): Promise<ChatBotConversation> {
  try {
    const resp = await api.delete(`api/v0/weekly`);
    return resp.data;
  } catch (error) {
    return {
      conversation: [],
      error: "Failed to delete chat conversation",
      finished: false,
    };
  }
}
