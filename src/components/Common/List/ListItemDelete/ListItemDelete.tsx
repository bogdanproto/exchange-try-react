import { IconButton, ListItem, ListItemText } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { useRef } from 'react';
import { selectAuthUser } from 'services/redux/auth/selectors';
import { delUserEqpt } from 'services/redux/auth/operationsUserProfile';

interface IItemList {
  id: string;
  item: string;
}

export const ListItemDelete = ({ id, item }: IItemList) => {
  const dispatch = useTypeDispatch();
  const ref = useRef<string | undefined>();
  const { isRefreshing } = useTypeSelector(selectAuthUser);

  const handleDelete = (evt: React.MouseEvent<HTMLButtonElement>) => {
    ref.current = evt.currentTarget.id;
    dispatch(delUserEqpt({ _id: ref.current }));
  };

  return (
    <>
      <ListItem
        sx={{ padding: '2px' }}
        secondaryAction={
          <IconButton
            id={id}
            onClick={handleDelete}
            disabled={isRefreshing && ref.current === id}
            edge="end"
            aria-label="delete"
            color="warning"
          >
            <HighlightOffIcon fontSize="small" />
          </IconButton>
        }
      >
        <ListItemText secondary={item} />
      </ListItem>
    </>
  );
};
