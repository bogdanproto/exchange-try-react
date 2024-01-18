import { Loader, NotificationBox } from 'components/Common';
import { errorMessage } from 'const';
import { selectNotification } from 'services/redux/commonSelectors';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';

export const Notification = () => {
  const { isLoading, error, succesMsg } = useTypeSelector(selectNotification);
  return (
    <>
      {isLoading && <Loader />}
      {error && error !== errorMessage.user_unauthorized_token && (
        <NotificationBox type="error" message={error} />
      )}
      {succesMsg && <NotificationBox type="success" message={succesMsg} />}
    </>
  );
};
