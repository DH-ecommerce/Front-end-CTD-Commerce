import './style.scss';
import { Card, Container, Row, Spinner } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react';
import gusta from '../../assets/imgs/gusta_img_2.jpg';
import edu from '../../assets/imgs/edu_img.jpg';
import sophie from '../../assets/imgs/sophia_img.jpg';
import ste from '../../assets/imgs/ste_img.jpg';
import vitor from '../../assets/imgs/vitor_img_2.jpg';
import nader from '../../assets/imgs/nader_img_2.jpg';

const Loading = ()=>(
  <div className="loading-div">
    <Spinner className="spinner" variant="success" animation="border" role="status">
    </Spinner>
  </div>
)

function Team() {
  const teammates = [
    {
      image: gusta,
      name: 'Gustavo Barretto',
      description: 'Fullstack Developer',
      github: 'https://github.com/gustavobarretto',
      linkedin: 'https://www.linkedin.com/in/gustavo-barretto1/',
    },
    {
      image: edu,
      name: 'Eduardo Araújo',
      description: 'Fullstack Developer',
      github: 'https://github.com/eduardoaraujogomes',
      linkedin: 'https://www.linkedin.com/in/eduaraujofilho/',
    },
    {
      image: vitor,
      name: 'Vitor Galbier',
      description: 'Fullstack Developer',
      github: 'https://github.com/VitorGalbier',
      linkedin: 'https://www.linkedin.com/in/vitor-galbier-344440211/',
    },
    {
      image: ste,
      name: 'Stefany Lovato',
      description: 'Fullstack Developer',
      github: 'https://github.com/stefanylovato',
      linkedin: 'https://www.linkedin.com/in/stefany-lovato-680748216/',
    },
    {
      image: sophie,
      name: 'Sophia Fiama',
      description: 'Fullstack Developer',
      github: 'https://github.com/sophiafiama',
      linkedin: 'https://www.linkedin.com/in/sophia-fiama-43a89a143/',
    },
    {
      image: nader,
      name: 'Marcelo Nader',
      description: 'Fullstack Developer',
      github: 'https://github.com/marcelonader',
      linkedin: 'https://www.linkedin.com/in/marcelonader/',
    },
  ];

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
        ? <Loading />
        : <>
          <Helmet>
            <title>NeoTech | Team</title>
          </Helmet>
          <Container className='d-flex flex-column align-items-center justify-content-center'>
            <h2 className='mt-4'>Team</h2>
            <Container className='col-md-12 col-lg-8'>
              <Row xs={2} md={3}>
                {teammates.map((member, idx) => (
                  <Container className='my-4' key={idx}>
                    <Card className='p-2'>
                      <Card.Img src={member.image} style={{ maxHeight: '65vh' }} />
                      <Card.Title className='my-2'>{member.name}</Card.Title>
                      <Card.Text>{member.description}</Card.Text>
                      <div className='d-flex gap-4 icon_div'>
                        <a
                          target='_blank'
                          href={member.github}
                          className='github_icon'
                          rel='noreferrer'
                        >
                          <AiFillGithub
                            size='40'
                            style={{ color: '#0ACF83' }}
                          ></AiFillGithub>
                        </a>
                        <a
                          target='_blank'
                          href={member.linkedin}
                          className='linkedin_icon'
                          rel='noreferrer'
                        >
                          <AiFillLinkedin
                            size='40'
                            style={{ color: '#0ACF83' }}
                          ></AiFillLinkedin>
                        </a>
                      </div>
                    </Card>
                  </Container>
                ))}
              </Row>
            </Container>
          </Container>
        </>
      }
    </>

  );
}

export default Team;
