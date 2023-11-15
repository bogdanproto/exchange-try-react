import styled from 'styled-components';

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 54px;

  svg {
    fill: ${({ theme }) => theme.colorLogo};
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colorTextLogo};
    text-align: center;
  }
`;
