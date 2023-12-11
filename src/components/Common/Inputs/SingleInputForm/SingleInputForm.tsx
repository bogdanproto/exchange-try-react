import { TextField, Box, IconButton } from '@mui/material';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaProfileForm } from 'const/shema';
import { ErrorInputForm } from 'components/Common/Error/ErrorInputForm.styled';

interface IAddInput {
  name: 'name' | 'phone';
}

interface IUserPatch {
  name?: string;
  phone?: string;
}

export const SingleInputForm = ({ name }: IAddInput) => {
  // const dispatch = useTypeDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserPatch>({
    resolver: yupResolver(schemaProfileForm),
  });

  const onSubmit: SubmitHandler<IUserPatch> = data => {
    console.log(data);
  };

  const isValid = watch(name);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        style={{
          paddingTop: '4px',
        }}
        sx={{
          display: 'flex',
          gap: '4px',
        }}
      >
        <Box
          style={{
            width: '100%',
            marginBottom: '4px',
          }}
        >
          <TextField
            {...register(name)}
            margin="dense"
            fullWidth
            label={name.toUpperCase()}
            variant="outlined"
            size="small"
          />
          <ErrorInputForm>{errors[name]?.message}</ErrorInputForm>
        </Box>

        <IconButton
          type="submit"
          aria-label="delete"
          color="primary"
          size="medium"
          sx={{ padding: '0' }}
          disabled={!isValid}
        >
          <ChangeCircleIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </form>
  );
};
