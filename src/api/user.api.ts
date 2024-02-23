import { api } from ".";
import { User } from "../types/user";

export async function fetchUserAPI(): Promise<User> {
  try {
    const resp = await api.get(`/api/v0/status`);
    return resp.data;
  } catch (error) {
    return {
      admin: false,
      premium: false,
      content_monitored_warning: false,
      weekly_open: false,
      weekly_completed: false,
      allow_weekly: false,
    };
  }
}
