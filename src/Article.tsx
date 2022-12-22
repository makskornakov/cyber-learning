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

  // const infoMapArray = infoMap.articles as ArticleData[];
  // take data from infoMap.json
  console.log(article);
  console.log(textsData.texts);
  return (
    <HomeContainer>
      <h1>Article page</h1>
      <h3>{article.title}</h3>
      {displayArticle(splitArrayBySimilarity(article.sections))}
      <FooterContainer>
        <Link to="/">Go back</Link>
      </FooterContainer>
    </HomeContainer>
  );
};

export default Article;

function splitArrayBySimilarity(array: string[]) {
  const result = [] as string[][];

  let currentArray = [] as string[];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      currentArray.push(array[i]);
    } else {
      const previous = array[i - 1];
      const current = array[i];

      if (previous.split('-')[1] === current.split('-')[1]) {
        currentArray.push(current);
      } else {
        result.push(currentArray);
        currentArray = [current];
      }
    }
  }
  console.log(result);
  return result;
}

function displayArticle(array: string[][]) {
  const textsArray = textsData.texts as TextData[];

  return array.map((section) => {
    const text = textsArray.find((text) => text.name === section[0]);
    if (!text) return null;
    const textName = text.name.split('-')[1];
    const textNameCapitalized =
      textName.charAt(0).toUpperCase() + textName.slice(1);
    return (
      <ArticleContainer>
        <h4>{textNameCapitalized}</h4>
        {section.map((textName) => {
          const text = textsArray.find((text) => text.name === textName);
          if (!text) return null;
          return <p>{text.text}</p>;
        })}
      </ArticleContainer>
    );
  });
}
