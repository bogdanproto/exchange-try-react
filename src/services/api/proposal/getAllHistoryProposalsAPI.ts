import { routeProposalAPI } from 'const';
import { exchangeAPI } from '../axiosConf/axiosConf';

export const getAllHistoryProposalsAPI = async () => {
  const { data } = await exchangeAPI.get(routeProposalAPI.HISTORY);
  return data;
};
