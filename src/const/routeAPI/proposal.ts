interface RoutesProposalAPI {
  BASE: string;
  UPDATE: string;
  CANCEL: string;
  UPDATE_BY_OWNER: string;
  REMOVE_BY_CUSTOMER: string;
  UPDATE_STATUS: string;
  HISTORY: string;
}

export const routeProposalAPI: RoutesProposalAPI = {
  BASE: '/api/proposals',
  HISTORY: '/api/proposals/all/history',
  UPDATE: '/api/proposals/update',
  CANCEL: '/api/proposals/cancel',
  UPDATE_BY_OWNER: '/api/proposals/update',
  REMOVE_BY_CUSTOMER: '/api/proposals/remove',
  UPDATE_STATUS: '/api/proposals/status',
};
