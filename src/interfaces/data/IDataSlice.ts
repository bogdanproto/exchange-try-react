import { IFilterProposals } from './filter/filter';
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
  filter: {
    filterProposalsHistory: ProposalStatusBack;
    filterProposals: IFilterProposals;
  };
  spots: ISpot[] | [];
  errorData: string | null;
  succesMsg: string | null;
  isLoading: boolean;
}
