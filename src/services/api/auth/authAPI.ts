import { IUserLogin, IUserSignUp } from 'interfaces/user/userInterface';
import { routeAuthAPI } from 'const/routeAPI/auth';
import { exchangeAPI } from '../axiosConf/axiosConf';

export const signUpAPI = async (objSignUp: IUserSignUp): Promise<any> => {
  const { data } = await exchangeAPI.post(routeAuthAPI.SIGNUP, objSignUp);

  return data;
};

export const logInAPI = async (objSignUp: IUserLogin): Promise<any> => {
  const { data } = await exchangeAPI.post(routeAuthAPI.LOGIN, objSignUp);

  return data;
};

export const logOutAPI = async (): Promise<any> => {
  await exchangeAPI.post(routeAuthAPI.LOGOUT);
};

export const refreshUserAPI = async (): Promise<any> => {
  const { data } = await exchangeAPI.get(routeAuthAPI.CURRENT);
  return data;
};

export const setAuthToken = (token: string): void => {
  exchangeAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthToken = (): void => {
  exchangeAPI.defaults.headers.common.Authorization = null;
};
