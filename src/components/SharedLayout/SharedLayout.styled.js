import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 32px;
  background-color: #fff;
`;

export const Header = styled.header`
  padding: 16px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: orange;
  }
`;
