import axios from 'axios';

import { IUserLogin, IUserSignUp } from 'interfaces/userInterface';
import { routeAPI } from 'const/routeAPI/auth';

const exchangeAPI = axios.create({
  baseURL: routeAPI.BASEURL,
});

export const signUpAPI = async (objSignUp: IUserSignUp): Promise<any> => {
  const { data } = await exchangeAPI.post(routeAPI.SIGNUP, objSignUp);

  return data;
};

export const logInAPI = async (objSignUp: IUserLogin): Promise<any> => {
  const { data } = await exchangeAPI.post(routeAPI.LOGIN, objSignUp);

  return data;
};

export const logOutAPI = async (): Promise<any> => {
  await exchangeAPI.post(routeAPI.LOGOUT);
};

export const refreshUserAPI = async (): Promise<any> => {
  const { data } = await exchangeAPI.get(routeAPI.CURRENT);
  return data;
};

export const setAuthToken = (token: string): void => {
  exchangeAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthToken = (): void => {
  exchangeAPI.defaults.headers.common.Authorization = null;
};
