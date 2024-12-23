import { BASE_URL, POST } from "../constants/serverConst";

export const apiGet = async () => {
  try {
    const response = await fetch("https://emkc.org/api/v2/piston/runtimes");
    const res = await response.json();
    return res;
  } catch (error) {
    console.warn(error);
    return error;
  }
};
type postProps = {
  endpoint?: string;
  body?: string;
};

export const apiPost = async ({ endpoint = "/api", body = "" }: postProps) => {
  const payload = {
    method: POST,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        status: "success",
        executed_code: body,
        output: "Welcome, Mickey",
      },
    }),
  };
  try {
    const response = await fetch(BASE_URL + endpoint, payload);
    const res = await response.json();

    return res;
  } catch (error) {
    return error;
  }
};
