import { IProposalCreate } from 'interfaces/data/proposal/IProposal';
import { exchangeAPI } from '../axiosConf/axiosConf';
import { routeProposalAPI } from 'const';

export const updateProposalAPI = async (objProposal: IProposalCreate) => {
  const id = objProposal._id;
  delete objProposal._id;

  const { data } = await exchangeAPI.patch(
    `${routeProposalAPI.UPDATE}/${id}/owner`,
    objProposal
  );

  return data;
};
