import { BASE_URL, POST } from "../constants/serverConst";

export const apiGet = async (endpoint = "/api") => {
  try {
    const response = await fetch(BASE_URL + endpoint);
    const res = await response.json();
    //console.log(response, res);
    return res;
  } catch (error) {
    console.warn(error);
    return error;
  }
};
type postProps = {
  endpoint?: string;
  data?: string;
};
export const apiPost = async ({ endpoint = "/api", data = "" }: postProps) => {
  const payload = {
    method: POST,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(BASE_URL + endpoint, payload);
    const res = await response.json();

    return res;
  } catch (error) {
    console.warn(error);
    return error;
  }
};
