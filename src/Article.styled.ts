import styled from 'styled-components';
import { flexStyles } from './Home.styled';

export const ArticleContainer = styled.div`
  ${flexStyles}
  flex-direction: column;

  /* outline: 1px solid black; */
  width: 60%;
  margin-top: 20px;
  padding: 20px;

  & h4 {
    margin: 0;
  }

  & p {
    text-align: left;
    white-space: pre-line;

    //ol no space on the left
    & ol {
      padding-left: 30px;

      & li {
        margin-top: 5px;
      }
    }
  }

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const FooterContainer = styled.div`
  ${flexStyles}
  flex-direction: row;
  width: 100%;
  height: 50px;
  outline: 0.5px solid black;
  margin-top: 50px;
  margin-bottom: 50px;
`;
