import { IProposalCreate } from 'interfaces/data/proposal/IProposal';
import { exchangeAPI } from '../axiosConf/axiosConf';
import { routeProposalAPI } from 'const';

export const createProposalAPI = async (obj: IProposalCreate) => {
  const { data } = await exchangeAPI.post(routeProposalAPI.BASE, obj);

  return data;
};
