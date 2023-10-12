import { defaultInstance } from "../../libs/apis/axios";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";
import { FORM_EVENT } from "../../libs/interface/typeEvent";

const handleSubmit = async (e: FORM_EVENT | null, inputValue: string, category: SearchCategoryType) => {
  if (e) {
    e.preventDefault();
  }

  category = !category ? "barName" : category;

  const value = inputValue;
  let requestUrl;

  if (category === "cocktail") {
    requestUrl = `barList?barName=${value}`;
  } else {
    requestUrl = `barList?${category}=${value}`;
  }

  try {
    const response = await defaultInstance.get(requestUrl);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export default handleSubmit;
