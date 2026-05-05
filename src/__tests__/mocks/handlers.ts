import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/tasks", () => {
    return HttpResponse.json([
      { id: "1", title: "Mock Task", completed: false },
    ]);
  }),
];
