import {
  IProposal,
  IProposalHistory,
  ProposalStatusBack,
} from './proposal/IProposal';
import { ISpot } from './spot/ISpot';

export interface ISliceData {
  proposals: IProposal[] | [];
  proposalsPending: IProposal[] | [];
  proposalsAccepted: IProposal[] | [];
  proposalsHistory: IProposalHistory[] | [];
  filter: {
    filterProposalsHistory: ProposalStatusBack;
  };
  spots: ISpot[] | [];
  errorData: string | null;
  isLoading: boolean;
}
