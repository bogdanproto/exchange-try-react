export interface ISpot {
  _id: string;
  spot: string;
}

export interface ISpotView extends Pick<ISpot, 'spot'> {}
