import styled, { css } from 'styled-components';

export const flexStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HomeContainer = styled.div`
  ${flexStyles}
  flex-direction: column;

  & h1 {
    margin-top: 50px;
  }
`;

export const ButtonContainer = styled.div`
  ${flexStyles}
  flex-direction: row;
  justify-content: space-evenly;
  width: 60%;
`;

export const ButtonToArticle = styled.button`
  ${flexStyles}
  width: 100px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  background: transparent;
  transition-duration: 0.4s;
  transition-property: background-color, color;
  font-size: 14px;

  &:hover {
    background: black;
    color: white;
  }
`;
