import { Logo } from '../../components/Logo/Logo';
import { AuthContainer } from '../../components/MainStyles/ComponentCommon/AuthContainer.styled';
import { SignupForm } from '../../components/SignupForm/SignupForm';

export const Signup = () => {
  return (
    <AuthContainer>
      <Logo />
      <SignupForm />
    </AuthContainer>
  );
};
