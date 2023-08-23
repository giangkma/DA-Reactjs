import { instance } from "../libs/axios";

export const loginAPI = (email: string, password: string) => {
  return instance.post("/auth/login", { email, password });
};
