import { useNavigate } from 'react-router-dom';
import { ArticleContainer } from './Article.styled';
import { ButtonContainer, ButtonToArticle, HomeContainer } from './Home.styled';
import infoMap from './infoMap.json';
import { ArticleData } from './types';

const HomePage = () => {
  const articleArray = infoMap.articles as ArticleData[];
  // get all article names from articleArray
  const articleNames = articleArray.map((article) => article.name);

  const navigate = useNavigate();
  return (
    <HomeContainer>
      <h1>Learning from Cyber incidents</h1>
      <ArticleContainer>
        <h3>Project description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ArticleContainer>
      <h3>Incident Selector</h3>
      <ButtonContainer>
        {articleNames.map((articleName) => (
          <ButtonToArticle
            style={{ margin: '0' }}
            onClick={() => {
              navigate('/article', {
                state: {
                  name: articleName,
                },
              });
            }}
          >
            {articleName.charAt(0).toUpperCase() + articleName.slice(1)}
          </ButtonToArticle>
        ))}
      </ButtonContainer>
    </HomeContainer>
  );
};

export default HomePage;
