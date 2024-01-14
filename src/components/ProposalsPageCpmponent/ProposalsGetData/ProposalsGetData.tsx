import { useEffect } from 'react';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllProposal } from 'services/redux/data/operations';
import { selectFilterProposal } from 'services/redux/data/selectors';

export const ProposalsGetData = () => {
  const filter = useTypeSelector(selectFilterProposal);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    const params = { ...filter, page: 1, limit: 10 };
    dispatch(getAllProposal(params));
  }, [dispatch, filter]);
  return <></>;
};
