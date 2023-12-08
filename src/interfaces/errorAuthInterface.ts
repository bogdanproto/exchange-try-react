export interface IErrorsListAuth {
  user_unauthorized_by: string;
  user_unauthorized_token: string;
  user_already_exist: string;
  common_auth_error: string;
  common_error: string;
}

export interface IErorrAuth {
  status: number;
  message: string;
  code: keyof IErrorsListAuth;
}
