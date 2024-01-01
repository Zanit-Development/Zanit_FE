/**
 * 바, 칵테일 목록 생성기
 */

import { defaultInstance } from "../../libs/apis/axios";
import { BarInfoList } from "../../libs/dummy/Bardetaildummy";
import { searchCocktailItems } from "../../libs/dummy/Searchdummy";

const listGenerator = {
  barListGenerator: async (inputValue: string = "") => {
    let requestUrl;

    if (!inputValue) {
      requestUrl = "barListHome";
    } else {
      requestUrl = `barList?barName=${inputValue}`;
    }

    try {
      const response = await defaultInstance.get(requestUrl, { timeout: 100 });
      return response.data;
    } catch (e) {
      console.log(e);
      return BarInfoList;
    }
  },

  cocktailListGenerator: async () => {
    const requestUrl = "getCocktailList?";

    try {
      const response = await defaultInstance.get(requestUrl, { timeout: 100 });
      return response.data;
    } catch (e) {
      console.log(e);
      return searchCocktailItems;
    }
  },
};

export default listGenerator;
