import './style.scss'
import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


import gusta from '../../assets/imgs/gusta_img_2.jpg';
import edu from '../../assets/imgs/edu_img.jpg';
import sophie from '../../assets/imgs/sophia_img.jpg';
import ste from '../../assets/imgs/ste_img.jpg';
import vitor from '../../assets/imgs/vitor_img_2.jpg';
import nader from '../../assets/imgs/nader_img_2.jpg';




function Team() {

  const teammates = [
    { image: gusta, name: "Gustavo Barretto", description: "Fullstack Developer", github: "", linkedin: "" },
    { image: edu, name: "Eduardo Araújo", description: "Fullstack Developer", github: "", linkedin: "" },
    { image: vitor, name: "Vitor Galbier", description: "Fullstack Developer", github: "https://github.com/VitorGalbier", linkedin: "https://www.linkedin.com/in/vitor-galbier-344440211/" },
    { image: ste, name: "Stefany Lovato", description: "Fullstack Developer", github: "", linkedin: "" },
    { image: sophie, name: "Sophia Fiama", description: "Fullstack Developer", github: "https://github.com/sophiafiama", linkedin: "https://www.linkedin.com/in/sophia-fiama-43a89a143/" },
    { image: nader, name: "Marcelo Nader", description: "Fullstack Developer", github: "", linkedin: "" }
  ]

  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center" >
        <h2>Team</h2>
        <Container className="col-md-6 col-sm-6 d-flex aligm-itens-center justify-content-center flex-wrap gap-3">
          <Row xs={2} sm={2} md={2}>
            {teammates.map((member, idx) => (
              <Container className="g-3">
                <Card className="g-3">
                  <Card.Img src={member.image} style={{ maxHeight: '65vh' }} />
                  <Card.Title>
                    {member.name}
                  </Card.Title>
                  <Card.Text>
                    {member.description}
                  </Card.Text>
                  <div className='icon_div'>
                    <a target="_blank" href={member.github} className='github_icon'>
                      <AiFillGithub size='40' style={{color: '#0ACF83'}}>
                      </AiFillGithub>
                    </a>
                    <a target="_blank" href={member.linkedin} className='linkedin_icon'>
                      <AiFillLinkedin size='40' style={{color: '#0ACF83'}}>
                      </AiFillLinkedin>
                    </a>

                  </div>
                </Card>
              </Container>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Team;
