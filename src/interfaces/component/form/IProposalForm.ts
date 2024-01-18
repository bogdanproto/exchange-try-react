import { ISpot } from 'interfaces/data/spot/ISpot';

export interface IProposalForm {
  allday: boolean;
  time: any;
  date: any;
  spot: ISpot;
  eqpts: string[];
  message: any;
  is_phone: boolean;
}
