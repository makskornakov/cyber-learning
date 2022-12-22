import styled, { css } from 'styled-components';

export const flexStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HomeContainer = styled.div`
  ${flexStyles}
  flex-direction: column;
  text-align: center;
  & h1 {
    margin-top: 50px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  width: 50%;
  margin-bottom: 50px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1000px) {
    width: 70%;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
  }
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
