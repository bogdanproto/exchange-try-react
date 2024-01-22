import { ISpot } from '../spot/ISpot';

export interface IParams {
  page: number;
  limit?: number;
}

export interface IFilterProposals {
  spot: ISpot | null;
  date: string | null;
}

export interface IParamsProposals {
  signal: any;
  page: number;
  limit?: number;
  spot: ISpot | null;
  date: string | null;
}
