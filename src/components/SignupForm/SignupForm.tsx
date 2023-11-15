import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignupForm } from '../../const/shema';
import { TextField } from '@mui/material';
import {
  AuthErrorText,
  AuthForm,
} from '../MainStyles/ComponentCommon/AuthForm.styled';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { formAuthTheme } from '../MainStyles/MaterialTheme';
import { ButtonFormStyled } from '../MainStyles/ComponentCommon/ButtonForm.styled';
import {
  AuthLinkContainer,
  NavLinkAuth,
} from '../MainStyles/ComponentCommon/AuthLinkContainer.styled';
import { routes } from '../../const/routes';
import { IUserSignUp } from '../../interfaces/userInterface';
import { useTypeDispatch } from '../../services/redux/customHook/typeHooks';
import { signUpUser } from '../../services/redux/auth/operations';

export const SignupForm = () => {
  const theme = useTheme();
  const dispatch = useTypeDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignupForm),
  });

  const onSubmit = (data: IUserSignUp) => {
    dispatch(signUpUser(data));
  };

  return (
    <ThemeProvider theme={formAuthTheme(theme)}>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            {...register('name')}
            margin="normal"
            fullWidth
            label="Name"
            variant="standard"
            size="medium"
          />
          <AuthErrorText>{errors.name?.message}</AuthErrorText>
        </div>
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
        <ButtonFormStyled type="submit">Sign Up</ButtonFormStyled>
        <AuthLinkContainer>
          <p>Already have an account?</p>
          <NavLinkAuth to={routes.LOGIN}>LogIn</NavLinkAuth>
        </AuthLinkContainer>
      </AuthForm>
    </ThemeProvider>
  );
};
