export interface ISliceAuthUser {
  user: { name: string | null; email: string | null };
  token: string | null;
  isLoggedIn: boolean;
  errorAuth: string | null;
  isRefreshing: boolean;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  uid: string | null;
  isLoggedIn: boolean;
}

export interface IUserSignUpSuccess {
  name: string;
  email: string | null;
  uid: string | null;
}

export interface IUserLogInSuccess {
  email: string | null;
  uid: string;
}

export interface IUserRefresh {
  email: string | null;
  isLoggedIn: boolean;
  uid: string | null;
}

export interface IUserLogin extends Pick<IUser, 'email' | 'password'> {}

export interface IUserSignUp
  extends Pick<IUser, 'name' | 'email' | 'password'> {}
