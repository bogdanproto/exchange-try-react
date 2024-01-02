import { RootState } from 'services/redux/store';

export const selectSpots = (state: RootState) => state.data.spots;
export const selectProposals = (state: RootState) => state.data.proposals;
