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

  if (!state || !state.name)
    return NoPage('Article name not found in location state');

  const articleArray = infoMap.articles as ArticleData[];
  const article = articleArray.find((article) => article.name === state.name);

  if (!article)
    return NoPage('Article not found in infoMap.json (src/infoMap.json)');

  // console.log(article);
  // console.log(textsData.texts);
  return (
    <HomeContainer>
      <h1>Article page</h1>
      <h3>{article.title}</h3>
      {renderArticle(article)}
      <FooterContainer>
        <Link to="/">Go back</Link>
      </FooterContainer>
    </HomeContainer>
  );
};

export default Article;

function renderArticle(article: ArticleData) {
  const textsArray = textsData.texts as TextData[];

  return article.sections.map((sectionArray) => {
    const textName = sectionArray.name;
    const textNameCapitalized =
      textName.charAt(0).toUpperCase() + textName.slice(1);

    return (
      <ArticleContainer
        style={{
          outline: '0.5px solid black',
        }}
      >
        <h4>{textNameCapitalized}</h4>
        {sectionArray.paragraphs.map((section) => {
          const text = textsArray.find(
            (text) => text.name === `${section}-${textName}`
          );
          if (!text) return null;
          return <p>{text.text}</p>;
        })}
      </ArticleContainer>
    );
  });
}
