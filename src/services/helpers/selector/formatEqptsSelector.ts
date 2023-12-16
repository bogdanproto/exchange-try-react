import { ISelect } from 'interfaces/component';
import { IEqpt } from 'interfaces/data';

export const formatEqptsSelector = (arr: IEqpt[]): ISelect[] =>
  arr.map(({ _id, title, size }: IEqpt) => ({
    id: _id,
    label: `${title} ${size}`,
  }));
