interface RoutesProposalAPI {
  BASE: string;
  UPDATE_BY_OWNER: string;
}

export const routeProposalAPI: RoutesProposalAPI = {
  BASE: '/api/proposals',
  UPDATE_BY_OWNER: '/api/proposals/update',
};
