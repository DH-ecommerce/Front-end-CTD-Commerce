import { Helmet } from 'react-helmet-async';
import Grid from '../components/Grid/index';
import {Spinner} from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Loading = ()=>(
  <div className="loading-div">
    <Spinner variant="success" animation="border" role="status">
    </Spinner>
  </div>
)

function Products() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const isLoading = setTimeout(()=>{setLoading(false)}, 500);

    return ()=>{
      clearTimeout(isLoading);
    }
  }, [])

  return (

  <>
    {loading 
     ? <Loading/>
     : <>
        <Helmet>
          <title>NeoTech | Product</title>
        </Helmet>
        <Grid />
       </>
     }
   </>
  );
}

export default Products;
