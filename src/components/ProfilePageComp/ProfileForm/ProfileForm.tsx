import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField } from '@mui/material';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { IProfileForm } from 'interfaces';
import { schemaProfileFormFull } from 'const';
import { ButtonForm, ErrorInputForm } from 'components/Common';
import { selectUser } from 'services/redux/auth/selectors';
import dayjs from 'dayjs';

export const ProfileForm = () => {
  // const dispatch = useTypeDispatch();
  const { name, phone } = useTypeSelector(selectUser);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IProfileForm>({
    defaultValues: {
      name,
      phone,
      experience: dayjs(),
    },
    resolver: yupResolver(schemaProfileFormFull),
  });

  const onSubmit: SubmitHandler<IProfileForm> = data => {
    console.log(data);
  };

  return (
    <Box
      style={{
        position: 'relative',
        paddingTop: '4px',
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          style={{
            position: 'relative',
            paddingTop: '4px',
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Box
            style={{
              width: '100%',
              marginBottom: '4px',
            }}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  fullWidth
                  label="NAME"
                  variant="outlined"
                />
              )}
            />
            <ErrorInputForm>{errors.name?.message}</ErrorInputForm>
          </Box>

          <Box
            style={{
              width: '100%',
              marginBottom: '4px',
            }}
          >
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  fullWidth
                  label="PHONE"
                  variant="outlined"
                />
              )}
            />
            <ErrorInputForm>{errors.phone?.message}</ErrorInputForm>
          </Box>

          <Box
            style={{
              width: '100%',
              marginBottom: '4px',
              marginTop: '8px',
            }}
          >
            <Controller
              name="experience"
              control={control}
              render={({ field }) => (
                <MobileDatePicker
                  {...field}
                  openTo="year"
                  label="EXPERIENCE START DATE"
                  sx={{ width: '100%' }}
                  format="DD.MM.YYYY"
                />
              )}
            />
          </Box>

          <ButtonForm mainBtn={'UPDATE'} />
        </Box>
      </form>
    </Box>
  );
};
