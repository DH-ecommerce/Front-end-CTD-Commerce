import React, {useEffect} from 'react';
import { useViewport } from '../../hooks/ViewportProvider';
import SingleProductDesktop from '../SingleProductDesktop/';
import SingleProductMobile from '../SingleProductMobile/';
import "./style.scss";

function SingleProduct() {

  const { width } = useViewport();
  const breakpoint = 1025;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return width < breakpoint ? (
    <SingleProductMobile/>
  ) : (
    <SingleProductDesktop/>
  );
}

export default SingleProduct;
