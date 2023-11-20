import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-family: 'Play', sans-serif;
    font-weight: bold;
    margin-right: 4px;
    color: ${({ theme }) => theme.colorMainText};
  }
`;

export const NavLinkAuth = styled(NavLink)`
  color: ${({ theme }) => theme.colorLinkAutn};
`;
