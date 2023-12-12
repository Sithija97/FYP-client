import axios, { AxiosRequestConfig } from "axios";
import { ILoginData } from "../models";

const BASE_URL = "http://192.168.8.103:3000/api/users";

const createAxiosInstance = (token: string) => {
  const config: AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.create(config);
};

const login = async (userData: ILoginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    console.log(response.data);
    // localStorage.setItem("user", JSON.stringify(response.data));
    return response;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

export const authService = { login };
