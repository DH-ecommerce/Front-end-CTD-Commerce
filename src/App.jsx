import Header from './pages/components/Header';
import Banner from './pages/components/Banner';
import Footer from './pages/components/Footer';
import Grid from './pages/components/Grid/index';
import Filter from './pages/components/Filter'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Filter />
      <Grid/>
      <Footer company={'NeoTech'} />
      
    </>
  );
}

export default App;
