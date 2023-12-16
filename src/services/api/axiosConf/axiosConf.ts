import axios from 'axios';

import { routeAPI } from 'const/routeAPI/baseRoute';

export const exchangeAPI = axios.create({
  baseURL: routeAPI.BASEURL,
});
