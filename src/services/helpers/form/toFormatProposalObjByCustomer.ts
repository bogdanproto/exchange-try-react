import dayjs from 'dayjs';
import { IOfferForm, IProposalUpdbyCustomer } from 'interfaces';

export const toFormatProposalObjByCustomer = ({
  time,
  eqpts,
  message,
}: IOfferForm): IProposalUpdbyCustomer => ({
  customerEqpts: eqpts,
  customerTime: dayjs(time).format('HH:mm'),
  customerMsg: message,
});
