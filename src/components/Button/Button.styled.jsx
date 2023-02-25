import styled from 'styled-components';

export const Btn = styled.button`
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
  box-shadow: 5px 5px 5px gray;
  &:hover,
  &:focus {
    color: violet;
  }
`;