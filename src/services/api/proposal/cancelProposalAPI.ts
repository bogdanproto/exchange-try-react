import { routeProposalAPI } from 'const';
import { exchangeAPI } from '../axiosConf/axiosConf';
import { IProposalCancel } from 'interfaces';

export const cancelProposalAPI = async (obj: IProposalCancel) => {
  const id = obj._id;
  delete obj._id;
  const { data } = await exchangeAPI.patch(
    `${routeProposalAPI.CANCEL}/${id}`,
    obj
  );

  return data;
};
