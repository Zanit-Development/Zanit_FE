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
      if (inputValue) {
        return BarInfoList.filter((e) => e.barName.includes(inputValue));
      }
      return BarInfoList;
    }
  },

  cocktailListGenerator: async () => {
    const requestUrl = "getCocktailList?";

    try {
      const response = await defaultInstance.get(requestUrl, { timeout: 100 });
      return response.data;
    } catch (e) {
      return searchCocktailItems;
    }
  },
};

export default listGenerator;
