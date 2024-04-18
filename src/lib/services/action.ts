import { goto } from "$app/navigation";
import { checkAuth } from "./api";

export const load = async () => {
  const res = await checkAuth();
  const data = await res.json();

  if (data.is_authenticated) {
    goto("/dashboard");
  }
};
