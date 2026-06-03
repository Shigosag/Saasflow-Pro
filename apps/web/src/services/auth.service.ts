import { api } from "./api";

export const authService = {
  register: (data: { email: string; password: string }) =>
    api.post("/auth/register", data),

  login: (data: { email: string; password: string }) =>
    api.post("/auth/login", data),

  logout: () =>
    api.post("/auth/logout"),

  me: () =>
    api.get("/auth/me"),
};