export const setTokenStorage = (tokens: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem("tokens", JSON.stringify(tokens));
};

export const getTokenStorage = () => localStorage.getItem("accessToken");

export const cleanTokenStorage = () => {
  localStorage.removeItem("tokens");
};

export const setLangStorage = (lang: string) => {
  localStorage.setItem("lang", lang);
};

export const getLangStorage = () => {
  return "en";
  // return localStorage.getItem("lang") || "tc";
};

export const setUserLoginStorage = (lang: string) => {
  localStorage.setItem("userLogin", lang);
};

export const getUserLoginStorage = () => {
  return localStorage.getItem("userLogin") || "";
};
