import { IEqptItem, IUserView } from 'interfaces/user/userInterface';
import { ISpotView } from '../spot/ISpot';

export interface IProposalPending {
  _id: string;
  ownerId: IUserView;
  ownerEqpts: IEqptItem[] | [];
  spot: ISpotView;
  ownerDate: string;
  ownerTime: string;
  ownerMsg: string | null;
  isShowPhone: boolean;
  isAutoAccept: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IProposalCreate {
  ownerEqpts: string[];
  spot: string;
  ownerDate: string;
  ownerTime: string;
  ownerMsg: string;
  isShowPhone: boolean;
  isAutoAccept: boolean;
}
