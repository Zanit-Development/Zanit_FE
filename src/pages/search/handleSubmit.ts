import { defaultInstance } from "../../libs/apis/axios";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";
import { FORM_EVENT } from "../../libs/interface/typeEvent";

const handleSubmit = async (e: FORM_EVENT, inputValue: string, searchType: SearchCategoryType) => {
  e.preventDefault();

  searchType = !searchType ? "barName" : searchType;
  if (!inputValue) {
    alert("빈값 입력을 막을까요 말까요");
  }

  const value = inputValue;
  const requestUrl = `barList?${searchType}=${value}`;

  try {
    const response = await defaultInstance.get(requestUrl);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export default handleSubmit;
