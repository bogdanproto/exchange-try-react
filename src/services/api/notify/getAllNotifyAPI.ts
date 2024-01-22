import { IParams } from 'interfaces';
import { exchangeAPI } from '../axiosConf/axiosConf';
import { routeNotifyAPI } from 'const';

export const getAllNotifyAPI = async ({ page, limit = 10 }: IParams) => {
  const params = { page, limit };
  const { data } = await exchangeAPI.get(routeNotifyAPI.BASE, { params });
  return data;
};
