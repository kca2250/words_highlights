import { User } from "./types";

export const fetcher = async (url: string): Promise<User[]> => {
  const response = await fetch(url);
  return response.json();
};
