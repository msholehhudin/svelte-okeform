import type { User } from "$lib/services/types";
import { writable } from "svelte/store";

// Initial state
export const userStore = writable<User>({
  id: "",
  name: "",
  is_banned: false,
  email: "",
  email_verified_at: "",
  created_at: "",
  updated_at: "",
});
