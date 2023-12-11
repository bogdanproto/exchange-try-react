import axios from 'axios';

import { routeAPI } from 'const/routeAPI/auth';

export const exchangeAPI = axios.create({
  baseURL: routeAPI.BASEURL,
});
