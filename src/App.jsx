import Header from './pages/components/Header';
import Banner from './pages/components/Banner';
import Footer from './pages/components/Footer';
import Grid from './pages/components/Grid/index'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Grid/>
      <Footer company={'NeoTech'} />
      
    </>
  );
}

export default App;
