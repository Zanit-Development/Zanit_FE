import { defaultInstance } from "../../libs/apis/axios";
import { FORM_EVENT } from "../../libs/interface/typeEvent";

const handleSubmit = async (e: FORM_EVENT, inputValue: string) => {
  e.preventDefault();
  const value = inputValue;
  const requestUrl = `searchCocktail?cocktailName=${value}`;

  try {
    const response = await defaultInstance.get(requestUrl);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export default handleSubmit;
