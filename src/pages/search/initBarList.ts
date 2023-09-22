import { defaultInstance } from "../../libs/apis/axios";

const getBarListHome = async () => {
  const requestUrl = `barListHome`;

  try {
    const response = await defaultInstance.get(requestUrl);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export default getBarListHome;
