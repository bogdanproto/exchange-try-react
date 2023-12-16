import { ISelect } from 'interfaces/component';
import { ISpot } from 'interfaces/data';

export const formatSpotSelector = (arr: ISpot[]): ISelect[] =>
  arr.map(({ _id, spot }: ISpot) => ({
    id: _id,
    label: spot.toUpperCase(),
  }));
