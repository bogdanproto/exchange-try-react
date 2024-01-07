interface RoutesProposalAPI {
  BASE: string;
  PENDING: string;
  UPDATE_BY_OWNER: string;
}

export const routeProposalAPI: RoutesProposalAPI = {
  BASE: '/api/proposals',
  PENDING: '/api/proposals/reservation',
  UPDATE_BY_OWNER: '/api/proposals/update',
};
