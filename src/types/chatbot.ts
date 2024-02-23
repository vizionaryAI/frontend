export type ChatbotQuestionsAndAnswers = {
  question: {
    title: string;
    subtitle: string;
    conversation: {
      role: string;
      content: string;
    }[];
    completed: boolean;
  };
  finished_all: boolean;
  error: string | null;
};

export type ChatBotConversation = {
  conversation: {
    role: string;
    content: string;
  }[];
  error: string | null;
  finished: boolean;
};
