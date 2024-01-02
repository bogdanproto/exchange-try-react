import { Box, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { SwitcherType } from '../CardControl/CardControl';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { deleteProposal } from 'services/redux/data/operations';

interface ICardOwnerControl {
  handleExpandMore: (arg: SwitcherType) => void;
  _id: string;
}

export const CardOwnerControl: React.FC<ICardOwnerControl> = ({
  _id,
  handleExpandMore,
}) => {
  const dispatch = useTypeDispatch();

  const handleClickDelete = (_id: string) => {
    dispatch(deleteProposal(_id));
  };

  return (
    <Box display="flex" gap="6px" justifyContent="left" alignItems="center">
      <IconButton
        style={{ padding: '0' }}
        onClick={() => handleExpandMore('edit')}
      >
        <EditNoteIcon sx={{ fontSize: 26 }} />
      </IconButton>

      <IconButton
        style={{ padding: '0' }}
        onClick={() => handleClickDelete(_id)}
      >
        <DeleteForeverIcon sx={{ fontSize: 20 }} />
      </IconButton>
    </Box>
  );
};
