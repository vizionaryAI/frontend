import { api } from ".";
import { ChatBotConversation } from "../types/chatbot";

//introduction api
export async function getIntroductionAPI(): Promise<ChatBotConversation> {
  try {
    const resp = await api.get(`api/v1/introduction/chat`);
    return resp.data;
  } catch (error) {
    return {
      conv_id: "",
      conversation: [],
      error: "Failed to fetch chat conversation",
      finished: false,
      user_id: "",
    };
  }
}

//introduction api
export async function sendIntroductionAPI(
  Answer: string
): Promise<ChatBotConversation> {
  try {
    const resp = await api.post(`api/v1/introduction/chat`, {
      content: Answer,
    });
    return resp.data;
  } catch (error) {
    return {
      conv_id: "",
      conversation: [],
      error: "Failed to send Answer",
      finished: false,
      user_id: "",
    };
  }
}

export async function sendVoiceMessage(
  audioBlob: Blob,
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  try {
    const formData = new FormData();
    formData.append("file", audioBlob, "voice-message.wav");

    const response = await api.post(`api/v1/${type}/tts`, formData, {
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

//session start api
export async function getVoiceMessage(
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  try {
    const response = await api.get(`api/v1/${type}/tts`, {
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
      conv_id: "",
      conversation: [],
      error: "Failed to fetch chat conversation",
      finished: false,
      user_id: "",
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
      conv_id: "",
      conversation: [],
      error: "Failed to send Answer",
      finished: false,
      user_id: "",
    };
  }
}

export async function deleteChatAPI(): Promise<ChatBotConversation> {
  try {
    const resp = await api.delete(`api/v0/chat`);
    return resp.data;
  } catch (error) {
    return {
      conv_id: "",
      conversation: [],
      error: "Failed to delete chat conversation",
      finished: false,
      user_id: "",
    };
  }
}

export async function getWeeklyChatBotConversationAPI(): Promise<ChatBotConversation> {
  try {
    const resp = await api.get(`api/v1/reflection/chat`);
    return resp.data;
  } catch (error) {
    return {
      conv_id: "",
      conversation: [],
      error: "Failed to fetch chat conversation",
      finished: false,
      user_id: "",
    };
  }
}

export async function sendAnswerToWeeklyChatAPI(
  Answer: string
): Promise<ChatBotConversation> {
  try {
    const resp = await api.post(`api/v1/reflection/chat`, { content: Answer });
    return resp.data;
  } catch (error) {
    return {
      conv_id: "",
      conversation: [],
      error: "Failed to send Answer",
      finished: false,
      user_id: "",
    };
  }
}

export async function deleteWeeklyAPI(): Promise<ChatBotConversation> {
  try {
    const resp = await api.delete(`api/v0/weekly`);
    return resp.data;
  } catch (error) {
    return {
      conv_id: "",
      conversation: [],
      error: "Failed to delete chat conversation",
      finished: false,
      user_id: "",
    };
  }
}
