import styled from 'styled-components';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    width: 100%;
  }
`;

export const AuthErrorText = styled.p`
  position: absolute;
  font-size: 14px;
  color: ${({ theme }) => theme.colorErrorsInput};
`;
