import { IProposal } from './proposal/IProposal';
import { ISpot } from './spot/ISpot';

export interface ISliceData {
  proposals: IProposal[] | [];
  spots: ISpot[] | [];
  errorData: string | null;
  isLoading: boolean;
}
