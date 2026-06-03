import { api } from "./api";

export const userService = {
  getProfile: () =>
    api.get("/users/profile"),

  updateProfile: (data: unknown) =>
    api.patch("/users/profile", data),
};