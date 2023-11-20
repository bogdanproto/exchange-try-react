import styled from 'styled-components';

export const ButtonFormStyled = styled.button`
  display: block;
  width: 100%;
  min-height: 56px;

  margin-top: 48px;
  margin-bottom: 16px;

  font-family: 'Play', sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.04em;
  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.colorButtonTextForm};
  background-color: ${({ theme }) => theme.colorButtonForm};
  border-radius: ${({ theme }) => theme.radiusButtonForm};
`;
