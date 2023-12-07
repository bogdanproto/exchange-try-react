import { errorMessage } from '../../../const/errorAuthNotification';
import { IErorrAuth } from '../../../interfaces/errorAuthInterface';

export const handleErrors = (error: IErorrAuth): string => {
  switch (error.status) {
    case 409:
      return errorMessage.LOGIN;
    case 500:
      return errorMessage.SIGNUP_EXIST;
    default:
      return errorMessage.LOADING;
  }
  // return errorMessage[error.status] || errorMessage.LOADING;
};

// switch (error.status) {
//   case 409:
//     return errorMessage.LOGIN;
//   case 500:
//     return errorMessage.SIGNUP_EXIST;
//   default:
//     return errorMessage.LOADING;
// }
