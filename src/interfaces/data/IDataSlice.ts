import { IFilterProposals } from './filter/filter';
import { INotifys } from './notify/INotify';
import {
  IProposal,
  IProposalHistory,
  IProposals,
  ProposalStatusBack,
} from './proposal/IProposal';
import { ISpot } from './spot/ISpot';

export interface ISliceData {
  proposals: IProposals;
  proposalsPending: IProposal[] | [];
  proposalsAccepted: IProposal[] | [];
  proposalsHistory: IProposalHistory[] | [];
  notifications: INotifys;
  filter: {
    filterProposalsHistory: ProposalStatusBack;
    filterProposals: IFilterProposals;
  };
  spots: ISpot[] | [];
  errorData: string | null;
  succesMsg: string | null;
  isLoading: boolean;
}
