export type ChatBotConversation = {
  conv_id: string;
  daily: {
    role: string;
    content: string;
  }[];
  weekly: {
    role: string;
    content: string;
  }[];
  finished: boolean;
  user_id: string;
  error?: string;
};

export type ChatBotConversationDto = {
  conv_id: string;
  conversation: {
    role: string;
    content: string;
  }[];
  finished: boolean;
  user_id: string;
  error?: string;
};

export type IntroConversation = {
  conv_id: string;
  conversation: {
    role: string;
    content: string;
  }[];
  finished: boolean;
  user_id: string;
  error?: string;
};

export enum RecordingState {
  Recording = "Recording",
  Waiting = "Waiting...",
  Listening = "Listening",
  None = "Start Recording",
  HelpGuideAnimation = "Click Here",
}
