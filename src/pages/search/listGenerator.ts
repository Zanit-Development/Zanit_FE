/**
 * 바, 칵테일 목록 생성기
 */

import { defaultInstance } from "../../libs/apis/axios";

const listGenerator = {
  barListGenerator: async (inputValue: string = "") => {
    let requestUrl;

    if (!inputValue) {
      requestUrl = "barListHome";
    } else {
      requestUrl = `barList?barName=${inputValue}`;
    }

    try {
      const response = await defaultInstance.get(requestUrl);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },

  cocktailListGenerator: async () => {
    const requestUrl = "getCocktailList?";

    try {
      const response = await defaultInstance.get(requestUrl);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};

export default listGenerator;
