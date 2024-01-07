import { routeProposalAPI } from 'const';
import { exchangeAPI } from '../axiosConf/axiosConf';

export const removeOfferCustomerAPI = async (id: String) => {
  const { data } = await exchangeAPI.patch(
    `${routeProposalAPI.REMOVE_BY_CUSTOMER}/${id}/customer`
  );
  return data;
};
