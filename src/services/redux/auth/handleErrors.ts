import { errorMessage } from '../../../const/notification';

export const handleErrors = (code: string): string => {
  switch (code) {
    case 'auth/invalid-login-credentials':
      return errorMessage.LOGIN;
    case 'auth/email-already-in-use':
      return errorMessage.SIGNUP;
    default:
      return errorMessage.LOADING;
  }
};
