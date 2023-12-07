interface RoutesAuthAPI {
  BASEURL: string;
  HOME: string;
  LOGIN: string;
  SIGNUP: string;
}

export const routeAPI: RoutesAuthAPI = {
  BASEURL: 'https://exchange-try-api.onrender.com',
  HOME: '/',
  LOGIN: '/users/login',
  SIGNUP: '/users/register',
};
