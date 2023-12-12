import { IconButton, ListItem, ListItemText } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface IItemList {
  id: string;
  item: string;
}

export const ListItemDelete = ({ id, item }: IItemList) => {
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
