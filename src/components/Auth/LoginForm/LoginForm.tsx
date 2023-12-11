import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLoginForm } from 'const/shema';
import { TextField } from '@mui/material';
import { AuthForm } from '../Common/AuthForm.styled';
import { ButtonFormStyled } from '../Common/ButtonForm.styled';
import { routes } from 'const/routes';
import { IUserLogin } from 'interfaces/userInterface';
import { logInUser } from 'services/redux/auth/operationsAuth';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import {
  AuthLinkContainer,
  NavLinkAuth,
} from '../Common/AuthLinkContainer.styled';
import { ErrorInputForm } from '../../Common/Error/ErrorInputForm.styled';

export const LoginForm = () => {
  const dispatch = useTypeDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLoginForm),
  });

  const onSubmit = (data: IUserLogin) => {
    dispatch(logInUser(data));
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          {...register('email')}
          margin="normal"
          fullWidth
          label="Email"
          variant="standard"
          size="medium"
        />
        <ErrorInputForm>{errors.email?.message}</ErrorInputForm>
      </div>
      <div>
        <TextField
          {...register('password')}
          type="password"
          margin="normal"
          fullWidth
          label="Password"
          variant="standard"
          size="medium"
        />
        <ErrorInputForm>{errors.password?.message}</ErrorInputForm>
      </div>
      <ButtonFormStyled type="submit">Login</ButtonFormStyled>
      <AuthLinkContainer>
        <p>Don't have an account?</p>
        <NavLinkAuth to={routes.SIGNUP}>Sign Up</NavLinkAuth>
      </AuthLinkContainer>
    </AuthForm>
  );
};
