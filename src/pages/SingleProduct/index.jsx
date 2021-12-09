import React, {useEffect} from 'react';
import { useViewport } from '../../hooks/ViewportProvider';
import SingleProductDesktop from '../SingleProductDesktop/';
import SingleProductMobile from '../SingleProductMobile/';
import ClientReview from '../components/ClientReview';

function SingleProduct() {
  const { width } = useViewport();
  const breakpoint = 1025;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return width < breakpoint ? (
    <>
      <SingleProductMobile />
      <ClientReview />
    </>
  ) : (
    <>
      <SingleProductDesktop />
      <ClientReview />
    </>
  );
}

export default SingleProduct;
