import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLoginForm } from '../../../const/shema';
import { TextField } from '@mui/material';
import {
  AuthErrorText,
  AuthForm,
} from '../../MainStyles/ComponentCommon/AuthForm.styled';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { formAuthTheme } from '../../MainStyles/MaterialTheme';
import { ButtonFormStyled } from '../../MainStyles/ComponentCommon/ButtonForm.styled';
import {
  AuthLinkContainer,
  NavLinkAuth,
} from '../../MainStyles/ComponentCommon/AuthLinkContainer.styled';
import { routes } from '../../../const/routes';
import { IUserLogin } from '../../../interfaces/userInterface';
import { useTypeDispatch } from '../../../services/redux/customHook/typeHooks';
import { logInUser } from '../../../services/redux/auth/operations';

export const LoginForm = () => {
  const theme = useTheme();
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
    <ThemeProvider theme={formAuthTheme(theme)}>
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
          <AuthErrorText>{errors.email?.message}</AuthErrorText>
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
          <AuthErrorText>{errors.password?.message}</AuthErrorText>
        </div>
        <ButtonFormStyled type="submit">Login</ButtonFormStyled>
        <AuthLinkContainer>
          <p>Don't have an account?</p>
          <NavLinkAuth to={routes.SIGNUP}>Sign Up</NavLinkAuth>
        </AuthLinkContainer>
      </AuthForm>
    </ThemeProvider>
  );
};
