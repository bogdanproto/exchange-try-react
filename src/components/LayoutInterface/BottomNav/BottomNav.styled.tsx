import styled from 'styled-components';

interface btnProps {
  readonly $isActive: boolean;
}

export const BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25%;

  width: 100%;
  height: 56px;
  padding: 8px;

  background-color: ${({ theme }) => theme.colorFixedMenu};
  box-shadow: ${({ theme }) => theme.shadowMenu};
`;

export const NavButton = styled.div<btnProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 34px;
    height: 34px;
    fill: ${({ $isActive, theme }) =>
      $isActive ? theme.colorActive : theme.colorMainText};
  }

  p {
    display: block;
    text-align: center;

    margin-top: 2px;

    font-weight: 700;
    font-size: 12px;

    color: ${({ $isActive, theme }) =>
      $isActive ? theme.colorActive : theme.colorMainText};
  }
`;
