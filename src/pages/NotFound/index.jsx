import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container, Image } from 'react-bootstrap';
import cavalinho from '../../assets/imgs/404_error.png'


const NotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 7000);

  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Container className='d-flex flex-column justify-content-center align-itens-center '>
        <h2 className="text-not-found text-center">404 page not found</h2>

        <img src={cavalinho} alt="cavalinho" className='img-not-found'
                      
                      variant='top'
                      style={{
                        maxHeight: '60vh',
                        objectFit: 'contain',
                                              }} />
        
      </Container>


    </>
  );
};
export default NotFound;
