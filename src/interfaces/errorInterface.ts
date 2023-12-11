export interface IErrorsList {
  user_unauthorized_by: string;
  user_unauthorized_token: string;
  user_already_exist: string;
  user_avatar_badfile: string;
  common_auth_error: string;
  common_error: string;
}

export interface IErorr {
  status: number;
  message: string;
  code: keyof IErrorsList;
}
