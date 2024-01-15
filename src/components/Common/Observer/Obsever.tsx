import { InView } from 'react-intersection-observer';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllProposal } from 'services/redux/data/operations';
import {
  selectFilterProposal,
  selectProposalsInfo,
} from 'services/redux/data/selectors';

export const Observer = () => {
  const filter = useTypeSelector(selectFilterProposal);
  const { page, total, currentTotal } = useTypeSelector(selectProposalsInfo);
  const dispatch = useTypeDispatch();

  const handleChange = (inView: boolean) => {
    if (inView && currentTotal < total) {
      dispatch(
        getAllProposal({
          ...filter,
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
