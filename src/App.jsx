import Header from './pages/components/Header';
import Banner from './pages/components/Banner';
import CardCarousel from './pages/components/CardCarousel';
import Footer from './pages/components/Footer';
import Grid from './pages/components/Grid/index';
import CartPage from './pages/CartPage';
import Filter from './pages/components/Filter';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CardCarousel/>
      <Filter />
      <Grid />
      <CartPage />
      <Footer company={'NeoTech'} />
    </>
  );
}

export default App;
