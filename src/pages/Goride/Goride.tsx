import { useEffect } from 'react';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllProposalAccepted } from 'services/redux/data/operations';
import { selectProposalAccepted } from 'services/redux/data/selectors';

export const Goride = () => {
  const proposals = useTypeSelector(selectProposalAccepted);
  const dispatch = useTypeDispatch();

  console.log(proposals);

  useEffect(() => {
    dispatch(getAllProposalAccepted());
  }, [dispatch]);

  return <p>test</p>;
};
