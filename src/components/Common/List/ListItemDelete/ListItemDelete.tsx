import { IconButton, ListItem, ListItemText } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface IEqpt {
  id: string;
  item: string;
}

export const ListItemDelete = ({ id, item }: IEqpt) => {
  return (
    <>
      <ListItem
        sx={{ padding: '2px' }}
        secondaryAction={
          <IconButton id={id} edge="end" aria-label="delete" color="success">
            <HighlightOffIcon fontSize="small" />
          </IconButton>
        }
      >
        <ListItemText secondary={item} />
      </ListItem>
    </>
  );
};
