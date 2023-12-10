export interface IUser {
  name: string | null;
  email: string | null;
  phone: string | null;
  avatarCloudURL: string | null;
  mainsport: string | null;
  equipments: null | string[] | [];
  sports: null | string[];
}

export interface ISliceAuthUser {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  errorAuth: string | null;
  isRefreshing: boolean;
  isAppLoaded: boolean;
}

export interface IUserSignUpSuccess {
  user: {
    name: string;
    email: string;
    mainsport: string;
    sports: string[];
  };
  token: string;
}

export interface IUserLogInSuccess {
  user: {
    name: string;
    email: string;
    phone: string;
    avatarCloudURL: string;
    mainsport: string;
    equipments: string[];
    sports: string[];
  };
  token: string;
}

export interface IUserAvatarSuccess {
  avatarCloudURL: string;
}

//===========Interface Form================
export interface IUserForm {
  name: string;
  email: string;
  password: string;
}

export interface IUserLogin extends Pick<IUserForm, 'email' | 'password'> {}

export interface IUserSignUp
  extends Pick<IUserForm, 'name' | 'email' | 'password'> {}

export interface ITest extends Pick<IUserForm, 'name'> {}
