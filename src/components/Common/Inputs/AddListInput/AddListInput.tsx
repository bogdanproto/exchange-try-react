import { TextField, Box, IconButton, Typography, List } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ListItemDelete } from 'components/Common/List/ListItemDelete/ListItemDelete';

interface IListEqpt {
  _id: string;
  title: string;
  size: string;
}

const listEqpt = [
  { _id: '1212123143143', title: 'Kite Core XR', size: '12' },
  { _id: '12121231sd43143', title: 'Kite Core XR', size: '10' },
  { _id: '1212123112sd43143', title: 'Kite Core XR', size: '13' },
  { _id: '1212123112sd4323143', title: 'Kite Core XR', size: '14' },
  { _id: '11212123143143', title: 'Kite Core XR', size: '12' },
  { _id: '122121231sd43143', title: 'Kite Core XR', size: '10' },
  { _id: '12132123112sd43143', title: 'Kite Core XR', size: '13' },
  { _id: '12124123112sd4323143', title: 'Kite Core XR', size: '14' },
  { _id: '12121523143143', title: 'Kite Core XR', size: '12' },
  { _id: '121212631sd43143', title: 'Kite Core XR', size: '10' },
  { _id: '12121237112sd43143', title: 'Kite Core XR', size: '13' },
  { _id: '12121231812sd4323143', title: 'Kite Core XR', size: '14' },
];

export const AddListInput = () => {
  return (
    <Box
      style={{
        marginTop: '4px',
        padding: '2px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography
        variant="overline"
        display="block"
        sx={{
          height: '18px',
        }}
      >
        YOUR EQUIPMENTS
      </Typography>
      <Box
        style={{
          paddingTop: '2px',
        }}
        sx={{
          display: 'flex',

          alignItems: 'center',
          gap: '4px',
        }}
      >
        <TextField
          margin="dense"
          fullWidth
          label="Equipment"
          variant="outlined"
          size="small"
        />
        <TextField
          margin="dense"
          fullWidth
          label="Size"
          variant="outlined"
          size="small"
          sx={{ width: '114px' }}
        />
        <IconButton
          aria-label="delete"
          color="primary"
          size="medium"
          sx={{ padding: '0' }}
        >
          <AddCircleOutlineIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <List
        sx={{
          height: 'max(25vh)',
          maxHeight: '80vh',
          overflow: 'auto',
          padding: '12px',
        }}
      >
        {listEqpt &&
          listEqpt.map(({ _id, title, size }: IListEqpt) => (
            <ListItemDelete
              key={_id}
              id={_id}
              item={`${title} ${size}`.trim()}
            />
          ))}
      </List>
    </Box>
  );
};
