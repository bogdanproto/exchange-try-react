import { errorMessage } from '../../../const/errorAuthNotification';
import { IErorrAuth } from '../../../interfaces/errorAuthInterface';

export const handleErrors = (error: IErorrAuth): string =>
  errorMessage[error.code] || errorMessage.common_auth_error;
