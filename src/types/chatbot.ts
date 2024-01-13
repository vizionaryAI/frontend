export type ChatbotQuestionsAndAnswers = {
  question: {
    title: string;
    subtitle: string;
    conversation: {
      sender: string;
      message: string;
    }[];
    completed: boolean;
  };
  finished_all: boolean;
  error: string | null;
};
