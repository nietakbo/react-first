import Hero from '../Hero/Hero'
import Container from '../Container/Container';
import Lists from '../Lists/Lists';

const Home = () => {
  return (
    <main>
        <Container>
          <Hero />
          <Lists />
        </Container>
    </main>
  );
};

export default Home;