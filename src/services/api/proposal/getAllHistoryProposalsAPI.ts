import { routeProposalAPI } from 'const';
import { exchangeAPI } from '../axiosConf/axiosConf';

export const getAllHistoryProposalsAPI = async (signal: any) => {
  const { data } = await exchangeAPI.get(routeProposalAPI.HISTORY, { signal });
  return data;
};
