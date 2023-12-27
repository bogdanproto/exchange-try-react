import { Box, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { SwitcherType } from '../CardControl/CardControl';

interface ICardOwnerControl {
  handleExpandMore: (arg: SwitcherType) => void;
  _id: string;
}

export const CardOwnerControl: React.FC<ICardOwnerControl> = ({
  _id,
  handleExpandMore,
}) => {
  const deleteProposal = (_id: string) => {
    console.log(_id);
  };

  return (
    <Box display="flex" gap="6px" justifyContent="left" alignItems="center">
      <IconButton
        style={{ padding: '0' }}
        onClick={() => handleExpandMore('edit')}
      >
        <EditNoteIcon sx={{ fontSize: 26 }} />
      </IconButton>

      <IconButton style={{ padding: '0' }} onClick={() => deleteProposal(_id)}>
        <DeleteForeverIcon sx={{ fontSize: 20 }} />
      </IconButton>
    </Box>
  );
};
