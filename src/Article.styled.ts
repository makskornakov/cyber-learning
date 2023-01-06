import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexStyles } from './Home.styled';

export const ArticleContainer = styled.div`
  ${flexStyles}
  flex-direction: column;

  width: 60%;
  margin-top: 20px;
  padding: 20px;

  & h4 {
    margin-top: 0;
  }
  & h5 {
    text-align: left;
    width: 100%;
    margin: 0;
  }

  & p {
    margin-top: 5px;
    text-align: left;
    white-space: pre-line;

    & ol {
      margin: 5px 0;
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
export const LinkHome = styled(Link)`
  ${flexStyles}
  padding: 6px 12px;
  border: 1px solid black;
  border-radius: 3px;
  text-decoration: none;
  color: black;
  transition-duration: 0.4s;
  transition-property: background-color, color;

  &:hover {
    background: black;
    color: white;
  }
`;
export const FooterContainer = styled.div`
  ${flexStyles}
  flex-direction: row;
  width: 100%;
  height: 50px;
  /* outline: 0.5px solid black; */
  margin-top: 50px;
  margin-bottom: 50px;
`;
