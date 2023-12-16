interface RoutesAuthAPI {
  HOME: string;
  SIGNUP: string;
  LOGIN: string;
  LOGOUT: string;
  CURRENT: string;
  AVATAR: string;
  PROFILE: string;
  EQPTS: string;
}

export const routeAuthAPI: RoutesAuthAPI = {
  HOME: '/',
  SIGNUP: '/users/register',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  CURRENT: '/users/current',
  AVATAR: '/users/avatars',
  PROFILE: '/users/profile',
  EQPTS: '/api/equipments',
};
