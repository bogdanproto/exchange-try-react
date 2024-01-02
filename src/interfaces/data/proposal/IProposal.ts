import { IEqptItem, IUserView } from 'interfaces/user/userInterface';
import { ISpotView } from '../spot/ISpot';

export interface IProposal {
  _id: string;
  ownerId: IUserView;
  ownerEqpts: IEqptItem[] | [];
  spot: ISpotView;
  ownerDate: string;
  ownerTime: string;
  ownerMsg: string | null;
  isShowPhone: boolean;
  isAutoAccept: boolean;
  customerId: string | null;
  customerEqpts: IEqptItem[] | [];
  customerTime: string | null;
  customerMsg: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IProposalCreate {
  _id?: string;
  ownerEqpts: string[];
  spot: string;
  ownerDate: string;
  ownerTime: string;
  ownerMsg: string;
  isShowPhone: boolean;
  isAutoAccept: boolean;
}

export interface IProposalDelete {
  _id: string;
}

export interface IProposalUpdbyCustomer {
  _id?: string;
  customerEqpts: string[];
  customerTime: string;
  customerMsg: string;
}

export interface ICardInfoProposal
  extends Pick<
    IProposal,
    'ownerId' | 'spot' | 'ownerEqpts' | 'ownerDate' | 'ownerTime'
  > {}

export interface ICardControlProposal
  extends Pick<
    IProposal,
    | 'ownerId'
    | 'ownerMsg'
    | '_id'
    | 'ownerEqpts'
    | 'ownerDate'
    | 'ownerTime'
    | 'spot'
    | 'isShowPhone'
    | 'isAutoAccept'
  > {}

export interface ICardAdditionalProposal
  extends Pick<IProposal, 'ownerId' | 'ownerMsg'> {}
