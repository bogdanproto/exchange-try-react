import { Stack, Button } from '@mui/material';
import { ProposalStatusFront } from 'interfaces';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { updateProposalStatus } from 'services/redux/data/operations';

interface ICardOwnerControlProps {
  _id: string;
}

export const CardOwnerControl = ({ _id }: ICardOwnerControlProps) => {
  const dispatch = useTypeDispatch();

  const handleClick = (statusProposal: ProposalStatusFront) => {
    dispatch(updateProposalStatus({ _id, statusProposal }));
  };

  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Button
        onClick={() => handleClick('accept' as ProposalStatusFront)}
        style={{ height: '22px' }}
        size="small"
        type="button"
        variant="contained"
        color="secondary"
      >
        ACCEPT
      </Button>

      <Button
        onClick={() => handleClick('reject' as ProposalStatusFront)}
        style={{ height: '22px' }}
        size="small"
        type="button"
        variant="contained"
        color="secondary"
      >
        REJECT
      </Button>
    </Stack>
  );
};
