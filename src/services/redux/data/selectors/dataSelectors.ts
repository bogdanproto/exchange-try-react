import { RootState } from 'services/redux/store';

export const selectSpots = (state: RootState) => state.data.spots;
