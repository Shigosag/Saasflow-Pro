import { api } from "./api";

export const dashboardService = {
  getStats: () =>
    api.get("/dashboard/stats"),
};