import React, {Fragment, useState, useEffect} from 'react';
import { useViewport } from '../../hooks/ViewportProvider';
import SingleProductDesktop from '../SingleProductDesktop/';
import SingleProductMobile from '../SingleProductMobile/';
import ClientReview from '../components/ClientReview';
import "./style.scss";
import {Spinner} from 'react-bootstrap';

const Loading = ()=>(
  <div className="loading-div">
    <Spinner variant="success" animation="border" role="status">
    </Spinner>
  </div>
)

function SingleProduct() {

  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    const isLoading = setTimeout(()=>{setLoading(false)}, 1000);

    return ()=>{
      clearTimeout(isLoading);
    }
  }, [])

  const { width } = useViewport();
  const breakpoint = 1025;


  return width < breakpoint ? (
    <> 
     {loading 
      ? <Loading/>
      : <>
          <SingleProductMobile/>
          <ClientReview/>
        </>
      }
    </>
  ) : (
    <> 
     {loading 
      ? <Loading/>
      : <>
          <SingleProductDesktop/>
          <ClientReview/>
        </>
      }
    </>
  );

  
}

export default SingleProduct;
