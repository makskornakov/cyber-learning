import { HomeContainer } from './Home.styled';

const NoPage = (error: string) => {
  return (
    <HomeContainer>
      <h1>404</h1>
      <h2>No content found</h2>
      <h3>{error}</h3>
    </HomeContainer>
  );
};

export default NoPage;
