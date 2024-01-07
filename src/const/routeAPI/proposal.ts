interface RoutesProposalAPI {
  BASE: string;
  UPDATE: string;
  UPDATE_BY_OWNER: string;
  REMOVE_BY_CUSTOMER: string;
}

export const routeProposalAPI: RoutesProposalAPI = {
  BASE: '/api/proposals',
  UPDATE: '/api/proposals/update',
  UPDATE_BY_OWNER: '/api/proposals/update',
  REMOVE_BY_CUSTOMER: '/api/proposals/remove',
};
