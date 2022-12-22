import { useLocation, Link } from 'react-router-dom';
import { ArticleContainer, FooterContainer } from './Article.styled';
import { HomeContainer } from './Home.styled';
import infoMap from './infoMap.json';
import NoPage from './NoPage';
import textsData from './texts.json';
import { ArticleData, TextData } from './types';

const Article = () => {
  const location = useLocation();

  const { state } = location as {
    state: {
      name: string;
    };
  };

  if (!state.name) return NoPage('Article name not found in location state');

  const articleArray = infoMap.articles as ArticleData[];
  const textsArray = textsData.texts as TextData[];

  const article = articleArray.find((article) => article.name === state.name);

  if (!article)
    return NoPage('Article not found in infoMap.json (src/infoMap.json)');

  // const infoMapArray = infoMap.articles as ArticleData[];
  // take data from infoMap.json
  console.log(article);
  console.log(textsData.texts);
  return (
    <HomeContainer>
      <h1>Article page</h1>
      <h3>{article.title}</h3>
      {article.sections.map((section) => {
        const text = textsArray.find((text) => text.name === section);
        if (text) {
          const textName = text.name.split('-')[1];
          const textNameCapitalized =
            textName.charAt(0).toUpperCase() + textName.slice(1);
          return (
            <ArticleContainer>
              <h4>{textNameCapitalized}</h4>
              <p>{text.text}</p>
            </ArticleContainer>
          );
        }
        return null;
      })}
      <FooterContainer>
        <Link to="/">Go back</Link>
      </FooterContainer>
    </HomeContainer>
  );
};

export default Article;
