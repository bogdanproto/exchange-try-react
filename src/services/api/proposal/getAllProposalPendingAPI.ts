import { routeProposalAPI } from 'const';
import { exchangeAPI } from '../axiosConf/axiosConf';

export const getAllProposalPendingAPI = async () => {
  const { data } = await exchangeAPI.get(routeProposalAPI.BASE);
  return data;
};
