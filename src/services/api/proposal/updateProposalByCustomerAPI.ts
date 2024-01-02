import { IProposalUpdbyCustomer } from 'interfaces/data/proposal/IProposal';
import { exchangeAPI } from '../axiosConf/axiosConf';
import { routeProposalAPI } from 'const';

export const updateProposalByCustomerAPI = async (
  obj: IProposalUpdbyCustomer
) => {
  const id = obj._id;
  delete obj._id;
  const { data } = await exchangeAPI.patch(
    `${routeProposalAPI.BASE}/${id}`,
    obj
  );

  return data;
};
