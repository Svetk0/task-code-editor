import { LANGUAGE_VERSIONS } from "../constants/codeSnippets";
const BASE_URL = "https://emkc.org/api/v2/piston";

type postProps = {
  language: string;
  body?: string;
};
export const fetchExecuteCode = async ({ language, body = "" }: postProps) => {
  const endpoint = "/execute";
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      language: language.toLowerCase(),
      version: LANGUAGE_VERSIONS[language.toLowerCase() as keyof Object],
      files: [
        {
          content: body,
        },
      ],
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
