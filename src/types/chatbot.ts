export type ChatbotQuestionsAndAnswers = {
  question: {
    title: string;
    subtitle: string;
    conversation: {
      role: string;
      message: string;
    }[];
    completed: boolean;
  };
  finished_all: boolean;
  error: string | null;
};
