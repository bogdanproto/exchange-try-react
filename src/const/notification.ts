// interface INotification {
//   error: 'error';
//   warning: 'warning';
//   info: 'info';
//   success: 'success';
// }

interface IError {
  LOADING: string;
  LOGIN: string;
  SIGNUP: string;
  LOGOUT: string;
}

export const errorMessage: IError = {
  LOADING: 'Sometnihg went wrong, try to reload the app',
  LOGIN: 'Login or password is wrong. Or create a new user',
  SIGNUP: 'User already exists',
  LOGOUT: 'Sometnihg went wrong, try again',
};
