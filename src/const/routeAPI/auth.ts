interface RoutesAuthAPI {
  BASEURL: string;
  HOME: string;
  SIGNUP: string;
  LOGIN: string;
  LOGOUT: string;
  CURRENT: string;
  AVATAR: string;
}

export const routeAPI: RoutesAuthAPI = {
  BASEURL: 'https://exchange-try-api.onrender.com',
  HOME: '/',
  SIGNUP: '/users/register',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  CURRENT: '/users/current',
  AVATAR: '/users/avatars',
};
