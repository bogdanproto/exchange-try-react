import { routeNotifyAPI } from 'const';
import { exchangeAPI } from '../axiosConf/axiosConf';

export const updateStatusNotifyToViewedAPI = async () => {
  const { data } = await exchangeAPI.patch(routeNotifyAPI.UPDATE_STATUS_VIEWED);
  return data;
};
