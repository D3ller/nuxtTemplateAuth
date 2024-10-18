import type { UserWithoutPassword } from "~~/type";

export const useAuthUser = () => {
  return useState<UserWithoutPassword | null>("user", () => null);
};