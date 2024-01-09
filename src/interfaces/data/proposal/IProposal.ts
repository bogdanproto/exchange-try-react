import { IEqptItem, IUserView } from 'interfaces/user/userInterface';
import { ISpotView } from '../spot/ISpot';

export enum ProposalStatusBack {
  pending = 'pending',
  reservation = 'reservation',
  accepted = 'accepted',
}

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
  statusProposal: ProposalStatusBack;
  customerId: IUserView;
  customerEqpts: IEqptItem[] | [];
  customerTime: string | null;
  customerMsg: string | null;
  createdAt: string;
  updatedAt: string;
}

export enum ProposalStatusFront {
  reject = 'reject',
  accept = 'accept',
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

export interface IProposalUpdStatus {
  _id: string;
  statusProposal: ProposalStatusFront;
}

export interface ICardInfoProposal
  extends Pick<
    IProposal,
    'ownerId' | 'spot' | 'ownerEqpts' | 'ownerDate' | 'ownerTime'
  > {}

export interface ICardInfoProposalPending
  extends Pick<
    IProposal,
    | 'ownerId'
    | 'spot'
    | 'ownerEqpts'
    | 'ownerDate'
    | 'ownerTime'
    | 'customerId'
    | 'customerEqpts'
  > {
  customerTime?: string | null;
  statusProposal?: ProposalStatusBack;
}

export interface ICardPendingUser {
  user: IUserView;
  userEqpts: IEqptItem[] | [];
}

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
export interface ICardControlPending
  extends Pick<
    IProposal,
    | 'ownerId'
    | '_id'
    | 'customerId'
    | 'customerMsg'
    | 'customerTime'
    | 'customerEqpts'
  > {}

export interface ICardControlHistory
  extends Pick<
    IProposal,
    | 'ownerId'
    | 'ownerMsg'
    | 'ownerTime'
    | 'customerId'
    | 'customerMsg'
    | 'customerTime'
  > {}

export interface ICardAdditionalProposal
  extends Pick<IProposal, 'ownerId' | 'ownerMsg'> {}
