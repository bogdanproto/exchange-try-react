import { errorMessage } from 'const/notification/errorNotification';
import { IErorr } from 'interfaces/error/errorInterface';

export const handleErrors = (error: IErorr): string =>
  errorMessage[error.code] || errorMessage.common_auth_error;
