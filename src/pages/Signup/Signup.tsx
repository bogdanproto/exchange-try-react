import { Container } from '@mui/material';
import { Logo } from '../../components/Common/Logo/Logo';
import { AuthContainer } from '../../components/Auth/Common/AuthContainer.styled';
import { SignupForm } from '../../components/Auth/SignupForm/SignupForm';

export const Signup = () => {
  return (
    <Container sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <AuthContainer>
        <Logo />
        <SignupForm />
      </AuthContainer>
    </Container>
  );
};
