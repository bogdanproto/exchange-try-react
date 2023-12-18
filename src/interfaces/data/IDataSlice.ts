import { IProposalPending } from './proposal/IProposal';
import { ISpot } from './spot/ISpot';

export interface ISliceData {
  proposalsPending: IProposalPending[] | [];
  spots: ISpot[] | [];
  errorData: string | null;
  isLoading: boolean;
}
