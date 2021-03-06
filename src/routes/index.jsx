import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { HelmetProvider } from 'react-helmet-async';
import Products from '../pages/Products';
import SingleProduct from '../pages/SingleProduct';
import ShoppingCart from '../pages/ShoppingCart';
import Team from '../pages/Team';
import NotFound from '../pages/NotFound';
import Header from '../pages/components/Header';
import Footer from '../pages/components/Footer';

const RouteList = () => (
  <BrowserRouter>
    <HelmetProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/filter/:filtered' element={<Products />} />
        <Route
          path='/products/product/:singleProduct'
          element={<SingleProduct />}
        />
        <Route path='/shoppingCart' element={<ShoppingCart />} />
        <Route path='/team' element={<Team />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer company={'NeoTech'} />
    </HelmetProvider>
  </BrowserRouter>
);

export default RouteList;
