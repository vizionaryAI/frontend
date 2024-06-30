export type User = {
  name: string;
  email: string;
  admin: boolean;
  premium: boolean;
  weekly_open: boolean;
  allow_weekly: boolean;
  weekly_completed: boolean;
  active_conversation: boolean;
  introduction_completed: boolean;
  content_monitored_warning: boolean;
  first_session: boolean;
};
