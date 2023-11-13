import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLoginForm } from '../../const/shema';
import { TextField } from '@mui/material';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLoginForm),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <TextField
          {...register('email')}
          placeholder="Enter Your Email"
          margin="normal"
          required
          fullWidth
          label="Username"
        />
        <p>{errors.email?.message}</p>
      </label>
      <label>
        <input
          {...register('password')}
          type="password"
          placeholder="Enter Your Password"
        />
        <p>{errors.password?.message}</p>
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
