import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("api/post", () => {
    console.log("success");
    return new HttpResponse(200);
  }),
  http.post("api/loginOk", async ({ request }) => {
    const data = await request.formData();
    console.log(data.get("userphone"), data.get("userpassword"));

    // 계정1
    // HttpResponse.text()
    if (data.get("userphone") === "01011111111") {
      if (data.get("userpassword") === "qwer1234") {
        return new HttpResponse("x");
      } else {
        return new HttpResponse("wrongPw");
      }
    }
    return new HttpResponse("wrongPw");

    // 계정2
  }),
  http.get("api/userInfo", ({ cookies }) => {
    console.log("hi");
    if (cookies["LOGIN_COOKIE"] === "x") {
      return HttpResponse.json({
        userUid: 2,
        userName: "오가은",
        userPhone: "01041034769",
        userGender: false,
        subscribeName: "X 멤버십",
        subsStartDate: "2023-10-27T14:47:31",
        subsEndDate: "2023-11-27T14:47:31",
        subScribeType: null,
        subscribe: true,
        couponUsed: false,
      });
    }
  }),

  http.get("api/couponList", ({ cookies }) => {
    if (cookies["LOGIN_COOKIE"] === "x") {
      return HttpResponse.json([
        {
          createdDate: null,
          modifiedDate: null,
          couponUid: 1,
          userView: {
            userUid: 2,
            userName: "오가은",
            subscribe: true,
          },
          userUid: 2,
          couponName: "X 멤버십",
          usedBar: null,
          usedBars: null,
          usedCocktail: null,
          usedCocktails: null,
          coverCharge: null,
          expDate: "2023-11-03T11:59:00",
          usedTime: null,
          used: false,
        },
      ]);
    }
  }),

  http.post("api/couponUse", async ({ request }) => {
    const data = await request.json();
    console.log(data);

    // 성공
    return new HttpResponse(1);
  }),
];
