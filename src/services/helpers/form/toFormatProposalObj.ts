import dayjs from 'dayjs';
import { IProposalForm } from 'interfaces';
import { IProposalCreate } from 'interfaces/data/proposal/IProposal';

export const toFormatProposalObj = ({
  allday,
  time,
  date,
  spot,
  eqpts,
  message,
  is_phone,
  auto_accept,
}: IProposalForm): IProposalCreate => ({
  ownerEqpts: eqpts,
  spot,
  ownerDate: dayjs(date).format('YYYY-MM-DD'),
  ownerTime: !allday ? dayjs(time).format('HH:mm') : 'allday',
  ownerMsg: message,
  isShowPhone: is_phone,
  isAutoAccept: auto_accept,
});
