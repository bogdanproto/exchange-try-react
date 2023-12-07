import axios from 'axios';

import { IUserLogin, IUserSignUp } from '../../../interfaces/userInterface';
import { routeAPI } from '../../../const/routeAPI/auth';

const exchangeAPI = axios.create({
  baseURL: routeAPI.BASEURL,
});

export const signUpAPI = async (objSignUp: IUserSignUp): Promise<any> => {
  const { data } = await exchangeAPI.post(routeAPI.SIGNUP, objSignUp);

  return data;
};

// const setAuthToken = token => {
//   herokuApi.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const deleteAuthToken = () => {
//   herokuApi.defaults.headers.common.Authorization = null;
// };
