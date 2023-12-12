import { TextField, Box, IconButton, Typography, List } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ListItemDelete } from 'components/Common/List/ListItemDelete/ListItemDelete';
import { schemaEqptForm } from 'const/shema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorInputForm } from 'components/Common/Error/ErrorInputForm.styled';
import { IEqptItem, IEqptItemForm } from 'interfaces/userInterface';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { updUserEqpts } from 'services/redux/auth/operationsUserProfile';
import { selectUser } from 'services/redux/auth/selectors';

export const ProfileEqptForm = () => {
  const dispatch = useTypeDispatch();
  const { equipments } = useTypeSelector(selectUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IEqptItemForm>({
    resolver: yupResolver(schemaEqptForm),
  });

  const onSubmit: SubmitHandler<IEqptItemForm> = data => {
    dispatch(updUserEqpts(data));
    reset();
  };

  return (
    <Box
      style={{
        marginTop: '4px',
        padding: '2px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* <Typography
        variant="overline"
        display="block"
        sx={{
          height: '18px',
        }}
      >
        YOUR EQUIPMENTS
      </Typography> */}
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Box
            style={{
              marginBottom: '4px',
            }}
          >
            <TextField
              {...register('title')}
              margin="dense"
              fullWidth
              label="Equipment"
              variant="outlined"
              size="small"
            />
            <ErrorInputForm>{errors.title?.message}</ErrorInputForm>
          </Box>

          <Box
            style={{
              marginBottom: '4px',
            }}
            sx={{ width: '64px' }}
          >
            <TextField
              {...register('size')}
              margin="dense"
              fullWidth
              label="Size"
              variant="outlined"
              size="small"
              sx={{ width: '64px' }}
            />
            <ErrorInputForm>{errors.size?.message}</ErrorInputForm>
          </Box>
          <IconButton
            type="submit"
            disabled={!isValid}
            aria-label="delete"
            color="primary"
            size="medium"
            sx={{ padding: '0' }}
          >
            <AddCircleOutlineIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </form>
      <List
        sx={{
          height: 'max(25vh)',
          maxHeight: '80vh',
          overflow: 'auto',
          padding: '12px',
        }}
      >
        {Boolean(equipments.length) ? (
          equipments.map(({ _id, title, size }: IEqptItem) => (
            <ListItemDelete
              key={_id}
              id={_id}
              item={`${title} ${size}`.trim()}
            />
          ))
        ) : (
          <Typography
            variant="overline"
            display="block"
            sx={{
              height: '18px',
              color: theme => theme.palette.text.secondary,
            }}
          >
            Add Your Equipments...
          </Typography>
        )}
      </List>
    </Box>
  );
};