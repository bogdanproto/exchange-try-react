import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLoginForm, schemaTest } from '../../../const/shema';
import { TextField } from '@mui/material';
import { AuthErrorText } from '../../MainStyles/ComponentCommon/AuthForm.styled';
import { ButtonFormStyled } from '../../MainStyles/ComponentCommon/ButtonForm.styled';
import { ITest } from '../../../interfaces/userInterface';
import Switch from '@mui/material/Switch';
import { MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export const RequestForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: dayjs(),
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Switch inputProps={{ 'aria-label': 'controlled' }} name="allday" /> */}
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <MobileDatePicker {...field} />}
      />

      {/* <TextField
        {...register('name')}
        margin="normal"
        fullWidth
        label="Name"
        variant="standard"
        size="medium"
      /> */}

      <ButtonFormStyled type="submit">Create</ButtonFormStyled>
    </form>
  );
};
