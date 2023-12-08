export interface ISliceAuthUser {
  user: { name: string | null; email: string | null };
  token: string | null;
  isLoggedIn: boolean;
  errorAuth: string | null;
  isRefreshing: boolean;
  isAppLoaded: boolean;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  token: string | null;
  isLoggedIn: boolean;
}

export interface IUserSignUpSuccess {
  name: string;
  email: string;
  token: string;
}

export interface IUserLogInSuccess {
  name: string;
  email: string;
  token: string;
}

export interface IUserRefresh {
  email: string;
  name: string;
  token: string;
}

export interface IUserLogin extends Pick<IUser, 'email' | 'password'> {}

export interface IUserSignUp
  extends Pick<IUser, 'name' | 'email' | 'password'> {}

export interface ITest extends Pick<IUser, 'name'> {}
