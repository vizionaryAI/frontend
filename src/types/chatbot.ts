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
