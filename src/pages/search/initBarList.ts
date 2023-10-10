import { defaultInstance } from "../../libs/apis/axios";

export const getBarListHome = async () => {
  const requestUrl = `barListHome`;

  try {
    const response = await defaultInstance.get(requestUrl);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getCocktailListHome = async () => {
  const requestUrl = "getCocktailList";

  try {
    const response = await defaultInstance.get(requestUrl);
    return response;
  } catch (e) {
    console.log(e);
  }
};
