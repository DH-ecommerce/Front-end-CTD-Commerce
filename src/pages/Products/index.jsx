import { Helmet } from 'react-helmet-async';
import Grid from '../components/Grid/index';

function Products() {
  return (
    <>
      <Helmet>
        <title>NeoTech | Product</title>
      </Helmet>
      <Grid />
    </>
  );
}

export default Products;
