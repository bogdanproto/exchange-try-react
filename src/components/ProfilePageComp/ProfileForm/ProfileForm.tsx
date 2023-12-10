import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaProfileForm } from 'const/shema';

import { Paper, TextField, Box } from '@mui/material';

import { AvatarProfile } from 'components/Common/Interface/AvatarProfile';
import { ButtonForm } from 'components/Common/Buttons/ButtonForm';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectAuthUser } from 'services/redux/auth/selectors';

interface IProfileForm {
  avatar: File;
  name: string;
  phone: string;
}

export const ProfileForm = () => {
  const { register, handleSubmit, control } = useForm<IProfileForm>({
    defaultValues: {},
    resolver: yupResolver(schemaProfileForm) as any,
  });

  const {
    user: { name, avatarCloudURL },
  } = useTypeSelector(selectAuthUser);

  const onSubmit: SubmitHandler<IProfileForm> = data => console.log(data);

  return (
    <Paper
      elevation={3}
      style={{
        position: 'relative',
        padding: '18px',
      }}
    >
      <AvatarProfile name={name} avatarCloudUrl={avatarCloudURL} />

      <form onSubmit={handleSubmit(onSubmit)}>
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
          <TextField
            {...register('name')}
            margin="dense"
            fullWidth
            label="Name"
            variant="standard"
            size="medium"
          />
          <TextField
            {...register('phone')}
            margin="dense"
            fullWidth
            label="Phone"
            variant="standard"
            size="medium"
          />

          <ButtonForm name={'UPDATE'} />
        </Box>
      </form>
    </Paper>
  );
};
