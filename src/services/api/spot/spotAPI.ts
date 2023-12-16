import { routeSpotAPI } from 'const/routeAPI/spot';
import { exchangeAPI } from '../axiosConf/axiosConf';

export const getAllSpots = async () => {
  const { data } = await exchangeAPI.get(routeSpotAPI.BASE);
  return data;
};
