import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("api/post", () => {
    console.log("success");
    return new HttpResponse(200);
  }),
];
