interface RoutesNotifyAPI {
  BASE: string;
  UPDATE_STATUS_VIEWED: string;
}

export const routeNotifyAPI: RoutesNotifyAPI = {
  BASE: '/api/notify',
  UPDATE_STATUS_VIEWED: '/api/notify/status/viewed',
};
