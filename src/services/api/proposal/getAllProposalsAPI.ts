import { routeProposalAPI } from 'const';
import { exchangeAPI } from '../axiosConf/axiosConf';
import { IParamsProposals } from 'interfaces';

export const getAllProposalsAPI = async ({
  spot,
  date,
  page,
  limit = 10,
}: IParamsProposals) => {
  const params = { spot: spot?._id, date, page, limit };
  const { data } = await exchangeAPI.get(routeProposalAPI.BASE, { params });
  return data;
};
