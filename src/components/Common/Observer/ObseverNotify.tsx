import { InView } from 'react-intersection-observer';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllNotify } from 'services/redux/data/operations';
import { selectNotifyInfo } from 'services/redux/data/selectors';

export const ObseverNotify = () => {
  const { page, total, currentTotal } = useTypeSelector(selectNotifyInfo);
  const dispatch = useTypeDispatch();

  const handleChange = (inView: boolean) => {
    if (inView && currentTotal < total) {
      dispatch(
        getAllNotify({
          page: page + 1,
          limit: 10,
        })
      );
    }
  };

  return (
    <InView onChange={handleChange}>{({ ref }) => <div ref={ref} />}</InView>
  );
};
