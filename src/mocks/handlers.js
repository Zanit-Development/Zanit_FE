import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/post", () => {
    console.log("success");
  }),
];
