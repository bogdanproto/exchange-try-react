import { IProposal, IProposalHistory } from './proposal/IProposal';
import { ISpot } from './spot/ISpot';

export interface ISliceData {
  proposals: IProposal[] | [];
  proposalsPending: IProposal[] | [];
  proposalsAccepted: IProposal[] | [];
  proposalsHistory: IProposalHistory[] | [];
  spots: ISpot[] | [];
  errorData: string | null;
  isLoading: boolean;
}
