import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import SingleProduct from '../pages/SingleProduct';
import ShoppingCart from '../pages/ShoppingCart';
import Team from '../pages/Team';
import NotFound from '../pages/NotFound';
import Header from '../pages/components/Header';
import Footer from '../pages/components/Footer';

const RouteList = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/filter/:filtered' element={<Products />} />
      <Route path='/products/:singleProduct' element={<SingleProduct />} />
      <Route path='/shoppingCart' element={<ShoppingCart />} />
      <Route path='/team' element={<Team />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer company={'NeoTech'} />
  </BrowserRouter>
);

export default RouteList;
