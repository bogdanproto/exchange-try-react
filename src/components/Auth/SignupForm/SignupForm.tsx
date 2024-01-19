import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignupForm } from '../../../const/shema/shema';
import { TextField } from '@mui/material';
import { AuthForm } from '../Common/AuthForm.styled';
import { ButtonFormStyled } from '../Common/ButtonForm.styled';
import { routes } from '../../../const/routesApp/routes';
import { IUserSignUp } from '../../../interfaces/user/userInterface';
import { signUpUser } from '../../../services/redux/auth/operations/operationsAuth';
import { useTypeDispatch } from '../../../services/redux/customHook/typeHooks';
import {
  AuthLinkContainer,
  NavLinkAuth,
} from '../Common/AuthLinkContainer.styled';
import { ErrorInputForm } from '../../Common/Error/ErrorInputForm.styled';

export const SignupForm = () => {
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
        <ErrorInputForm>{errors.name?.message}</ErrorInputForm>
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
      <ButtonFormStyled type="submit">Sign Up</ButtonFormStyled>
      <AuthLinkContainer>
        <p>Already have an account?</p>
        <NavLinkAuth to={routes.LOGIN}>LogIn</NavLinkAuth>
      </AuthLinkContainer>
    </AuthForm>
  );
};
