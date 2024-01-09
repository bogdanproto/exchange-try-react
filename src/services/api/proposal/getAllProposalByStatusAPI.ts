import { routeProposalAPI } from 'const';
import { exchangeAPI } from '../axiosConf/axiosConf';

export const getAllProposalByStatusAPI = async (status: String) => {
  const { data } = await exchangeAPI.get(`${routeProposalAPI.BASE}/${status}`);
  return data;
};
