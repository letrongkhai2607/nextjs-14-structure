import axios, { AxiosResponse } from "axios";
import { cleanTokenStorage, getLangStorage, getTokenStorage } from "./storage";

export type APIResponse<T = any> = {
  items?: T[];
  data?: T;
  error?: { vc: any; code: string; message: string };
  success?: boolean;
  remarks?: any;
};
export const publicApi = (subPath: string = "") => {
  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE}/${subPath}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      const locale = getLangStorage();
      if (config.headers) {
        config.headers["locale"] = locale;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response: AxiosResponse<APIResponse>) => {
      return checkErrorCode(response);
    },
    (error) => {
      return checkErrorCode(error.response);
    }
  );

  return api;
};
// need have token auth
export const privateApi = (subPath: string = "") => {
  const api = axios.create({
    // withCredentials: true,
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE}/${subPath}`,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });

  api.interceptors.request.use(
    async (config) => {
      const token = getTokenStorage();
      const locale = getLangStorage();
      if (config.headers) {
        config.headers["locale"] = locale;
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    async (response: AxiosResponse<APIResponse, any>) => {
      return checkErrorCode(response);
    },
    async (error) => {
      if (error.response) {
        console.log(error.response);
        // Access Token was expired
        if (error.response.status === 401) {
          cleanTokenStorage();
          window.location.href = "/login";
          //const storedToken = getTokenStorage();

          // try {
          //   console.log(storedToken);
          //   const rs = await axios.post(
          //     `${process.env.NEXT_PUBLIC_API_BASE}/auth/refresh`,
          //     {
          //       refresh_token: storedToken.refresh_token,
          //     },
          //     {
          //       headers: {
          //         authorization: `Bearer ${storedToken.refreshToken}`,
          //       },
          //     }
          //   );
          //   checkErrorCode(rs);
          //   setTokenStorage(rs.data.data);
          //   return rs;
          // } catch (_error) {
          //   return Promise.reject(_error);
          // }
        }
      }
      return checkErrorCode(error.response);
    }
  );

  return api;
};

async function checkErrorCode(response: AxiosResponse<APIResponse>) {
  try {
    switch (response.data.success) {
      case false:
        //   store.dispatch(
        //     setAlertDialog({ show: true, msg: JSON.stringify(response.data) })
        //   );
        break;
      case true:
        break;

      default:
        break;
    }
    return response;
  } catch (error) {
    response = { ...response, data: { success: false, remarks: "" } };
    return response;
  }
}

export const customAxios = {
  private: privateApi(),
  public: publicApi(),
};
