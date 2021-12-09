import Banner from '../components/Banner';
import { Helmet } from 'react-helmet-async';
import CardCarousel from '../components/CardCarousel';
import Categories from '../components/Categories';

function Home() {
  return (
    <>
      <Helmet>
        <title>NeoTech | Home</title>
      </Helmet>
      <Banner />
      <CardCarousel />
      <Categories />
    </>
  );
}

export default Home;
