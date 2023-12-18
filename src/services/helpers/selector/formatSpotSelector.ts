import { ISpot } from 'interfaces';

export const formatSpotSelector = (arr: ISpot[]): Map<string, string> => {
  const mapCollection = new Map();

  arr.forEach(({ _id, spot }: ISpot) => {
    mapCollection.set(_id, spot.toUpperCase());
  });

  return mapCollection;
};
