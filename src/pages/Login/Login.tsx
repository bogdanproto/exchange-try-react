import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Logo } from '../../components/Logo/Logo';
import { AuthContainer } from '../../components/MainStyles/ComponentCommon/AuthContainer.styled';

export const Login = () => {
  return (
    <AuthContainer>
      <Logo />
      <LoginForm />
    </AuthContainer>
  );
};
