import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 5000);

  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h2>404 page not found</h2>
    </>
  );
};
export default NotFound;
