export type ChatBotConversation = {
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
}
