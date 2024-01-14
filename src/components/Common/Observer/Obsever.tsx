import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { selectIsDataLoading } from 'services/redux/commonSelectors';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllProposal } from 'services/redux/data/operations';
import {
  selectFilterProposal,
  selectProposals,
  selectProposalsPage,
  selectProposalsTotal,
} from 'services/redux/data/selectors';

export const Observer = () => {
  const currentFilter = useTypeSelector(selectFilterProposal);
  const proposals = useTypeSelector(selectProposals);
  const page = useTypeSelector(selectProposalsPage);
  const total = useTypeSelector(selectProposalsTotal);
  const dispatch = useTypeDispatch();
  // const [inView, setInView] = useState(false);

  // console.log(inView);

  const handleChange = (inView: boolean) => {
    console.log(inView);
    if (inView && proposals.length < total) {
      dispatch(
        getAllProposal({
          ...currentFilter,
          page: page + 1,
          limit: 10,
        })
      );
    }
  };

  return (
    <InView onChange={handleChange}>
      {({ inView, ref, entry }) => {
        return <div ref={ref} />;
      }}
    </InView>
  );
};
