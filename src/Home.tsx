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
          This website is an interactive form of a flowchart which is a brief
          guide map of actions for organizations that were involved in different
          cyber incidents. It has a solid information base in paragraphs
          combined into articles depending on your chosen situation. It is not
          designed to provide specific suggestions/actions but generalized
          knowledge, which can be a good start for further, more profound
          studies.
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
