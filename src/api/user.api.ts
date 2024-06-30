import { api } from ".";
import { User } from "../types/user";

export async function fetchUserAPI(): Promise<User> {
  try {
    const resp = await api.get(`/api/v1/profile`);
    return resp.data;
  } catch (error) {
    return {
      name: "",
      email: "",
      admin: false,
      premium: false,
      weekly_open: false,
      allow_weekly: false,
      weekly_completed: false,
      active_conversation: false,
      introduction_completed: false,
      content_monitored_warning: false,
      first_session: false,
    };
  }
}
