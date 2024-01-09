import { IProposalUpdStatus } from 'interfaces';
import { exchangeAPI } from '../axiosConf/axiosConf';
import { routeProposalAPI } from 'const';

export const updateProposalStatusAPI = async ({
  _id,
  statusProposal,
}: IProposalUpdStatus) => {
  const { data } = await exchangeAPI.patch(
    `${routeProposalAPI.UPDATE_STATUS}/${_id}`,
    { statusProposal }
  );
  return data;
};
