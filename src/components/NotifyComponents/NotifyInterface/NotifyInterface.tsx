import { Box } from '@mui/material';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import {
  selectAllNotify,
  selectTotalNotViewedNotify,
} from 'services/redux/data/selectors';
import { NotifyList } from '../NotifyList/NotifyList';
import { useEffect } from 'react';
import { updateStatusNotifyToViewed } from 'services/redux/data/operations/notify/updateStatusNotifyToViewed';
import { argument } from 'interfaces/common/argument';
import { getAllNotify } from 'services/redux/data/operations';

export const NotifyInterface = () => {
  const notifys = useTypeSelector(selectAllNotify);
  const unViewedNotifyQnt = useTypeSelector(selectTotalNotViewedNotify);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(getAllNotify({ page: 1, limit: 10 }));
  }, [dispatch]);

  useEffect(() => {
    if (unViewedNotifyQnt) {
      setTimeout(() => {
        dispatch(updateStatusNotifyToViewed(argument.empty));
      }, 7000);
    }
  }, [dispatch, unViewedNotifyQnt]);

  return (
    <Box
      style={{
        height: 'calc(100vh - 96px)',
        overflowY: 'scroll',
      }}
    >
      <NotifyList items={notifys} />
    </Box>
  );
};
