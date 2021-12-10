import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
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
      <Container className='d-flex flex-column justify-content-center align-itens-center'>
        <h2>404 page not found</h2>

        <img src={cavalinho} alt="cavalinho" />
        
      </Container>


    </>
  );
};
export default NotFound;
