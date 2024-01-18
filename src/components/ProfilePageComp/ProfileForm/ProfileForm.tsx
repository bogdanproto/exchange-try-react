import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField } from '@mui/material';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { IProfileForm } from 'interfaces';
import { schemaProfileFormFull } from 'const';
import { ButtonForm, ErrorInputForm } from 'components/Common';
import { selectUser } from 'services/redux/auth/selectors';
import dayjs from 'dayjs';
import { toFormatProfilelObj } from 'services/helpers';
import { updUserProfile } from 'services/redux/auth/operationsUserProfile';

export const ProfileForm = () => {
  const dispatch = useTypeDispatch();
  const { name, phone, experience } = useTypeSelector(selectUser);

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm<IProfileForm>({
    defaultValues: {
      name,
      phone: phone ?? '',
      experience: experience ? dayjs(experience) : null,
    },
    resolver: yupResolver(schemaProfileFormFull),
  });

  const onSubmit: SubmitHandler<IProfileForm> = data => {
    const prepareData = toFormatProfilelObj(data);
    dispatch(updUserProfile(prepareData));
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
                  maxDate={dayjs()}
                  openTo="year"
                  label="EXPERIENCE START DATE"
                  sx={{ width: '100%' }}
                  format="DD.MM.YYYY"
                />
              )}
            />
          </Box>

          <ButtonForm mainBtn={'UPDATE'} disabled={!isDirty} />
        </Box>
      </form>
    </Box>
  );
};
