import { routeProposalAPI } from 'const';
import { exchangeAPI } from '../axiosConf/axiosConf';
import { IProposalGetByStatus } from 'interfaces/data/proposal/IProposal';

export const getAllProposalByStatusAPI = async ({
  status,
  signal,
}: IProposalGetByStatus) => {
  const { data } = await exchangeAPI.get(`${routeProposalAPI.BASE}/${status}`, {
    signal,
  });
  return data;
};
