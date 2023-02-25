import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 60px;
`;

export const ImgWrap = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 360px;
  height: 450px;
  border-radius: 4px;
`;

export const InfoWrap = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 30px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 15px;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 30px;
`;
export const LinkItem = styled.li`
  list-style: none;

`;

export const StyledNavLink = styled(NavLink)`
  padding: 9px 16px;
  border-radius: 5px;
  background-color: blueviolet;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 100px;
  box-shadow: 5px 5px 5px gray ;
  &:hover,
  &:focus {
    color: violet;
  }
`;