export const membershipPrice = (subscribeName: string) => {
  if (subscribeName === "X 멤버십") {
    return { discount: 25, price: 29900 };
  } else if (subscribeName === "Y 멤버십") {
    return { discount: 17, price: 99900 };
  } else {
    return { discount: null, price: 39900 };
  }
};
