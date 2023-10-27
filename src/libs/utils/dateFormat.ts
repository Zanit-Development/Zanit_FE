// 0000.00.00 형식
export const dateFormat = (dateData: string) => {
  const date = new Date(dateData).toLocaleDateString().replace(/\./g, "").replace(/\s/g, ".");
  return date;
};

// 이번 쿠폰 만료일 00월 00일 형식
export const expDateFormat = (dateData: string) => {
  const expDate = new Date(dateData);
  const expDateFormat = expDate.toLocaleDateString("ko-KR", { month: "long", day: "numeric" });
  return expDateFormat;
};

// 다음 쿠폰 날짜 00월 00일 형식
export const nextCouponDateFormat = (dateData: string) => {
  const subsEndDate = new Date(dateData);
  subsEndDate.setDate(subsEndDate.getDate() + 1);
  const nextCouponDateFormat = subsEndDate.toLocaleDateString("ko-KR", { month: "long", day: "numeric" });
  return nextCouponDateFormat;
};

// 쿠폰 이용 내역 00/00/00 형식
export const historyDateFormat = (dateData: string) => {
  const date = new Date(dateData);
  const year = date.getFullYear().toString().slice(2).padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}/${month}/${day}`;
};
