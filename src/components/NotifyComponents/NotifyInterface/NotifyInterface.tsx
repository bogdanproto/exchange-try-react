import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectAllNotify } from 'services/redux/data/selectors';
import { NotifyList } from '../NotifyList/NotifyList';

export const NotifyInterface = () => {
  const notifys = useTypeSelector(selectAllNotify);

  return <NotifyList items={notifys} />;
};
