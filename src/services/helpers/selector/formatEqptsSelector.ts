import { IEqpt } from 'interfaces/data';

export const formatEqptsSelector = (arr: IEqpt[]): Map<string, string> => {
  const mapCollection = new Map();

  arr.forEach(({ _id, title, size }: IEqpt) => {
    mapCollection.set(_id, `${title} ${size}`);
  });

  return mapCollection;
};
