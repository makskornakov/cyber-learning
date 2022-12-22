import { useNavigate } from 'react-router-dom';
import { HomeContainer } from './Article.styled';
import infoMap from './infoMap.json';
import { ArticleData } from './types';

export const HomePage = () => {
  const articleArray = infoMap.articles as ArticleData[];
  // get all article names from articleArray
  const articleNames = articleArray.map((article) => article.name);

  const navigate = useNavigate();
  return (
    <HomeContainer>
      <h1>Home Page</h1>
      <div>
        {/* Page selector */}
        {articleNames.map((articleName) => (
          <button
            style={{ margin: '0' }}
            onClick={() => {
              navigate('/article', {
                state: {
                  name: articleName,
                },
              });
            }}
          >
            {articleName}
          </button>
        ))}
      </div>
    </HomeContainer>
  );
};

export default HomePage;
