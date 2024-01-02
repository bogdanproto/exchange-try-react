import { routeProposalAPI } from 'const';
import { exchangeAPI } from '../axiosConf/axiosConf';

export const deleteProposalAPI = async (id: string) => {
  const { data } = await exchangeAPI.delete(`${routeProposalAPI.BASE}/${id}`);
  return data;
};
