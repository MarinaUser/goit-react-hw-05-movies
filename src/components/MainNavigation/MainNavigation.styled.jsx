import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  background-color: blueviolet;
  > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 25px;
  color: #ffffff;
  outline: none;
  text-decoration: none;
  &.active {
    color: violet;
   
  }
`;