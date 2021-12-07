import './style.scss'
import React from 'react'
import { Card, Container,Col, Row } from 'react-bootstrap';


import gusta from '../../assets/imgs/gusta_img_2.jpg';
import edu from '../../assets/imgs/edu_img.jpg';
import sophie from '../../assets/imgs/sophia_img.jpg';
import ste from '../../assets/imgs/ste_img.jpg';
import vitor from '../../assets/imgs/vitor_img_2.jpg';
import nader from '../../assets/imgs/nader_img_2.jpg';




function Team() {

  const teammates = [
    {image: gusta, name: "Gustavo Barretto", description: ""},
    {image: edu, name: "Eduardo de Araújo", description: ""},
    {image: vitor, name: "Vitor Galbier", description: ""},
    {image: ste, name: "Stefany Lovato", description: ""},
    {image: sophie, name: "Sophia Fiama", description: ""},
    {image: nader, name: "Marcelo Nader", description: ""}
  ]

  return (
    <>
    <Container className="d-flex flex-column align-items-center justify-content-center" >
          <h2>Team</h2>
        <Container className="col-md-8 col-sm-8 d-flex aligm-itens-center justify-content-center flex-wrap gap-3">
        <Row xs={2} sm={2} md={2}  >
          {teammates.map( (member, idx) => (
            <Card >
              <Card.Img src={member.image} />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                <Card.Title>
                  {member.name}
                </Card.Title>
                <Card.Text>
                  Descrição
                </Card.Text>            
              </Card.ImgOverlay>         
            </Card>
          ))}
          </Row>
        </Container>
    </Container>
    </>
  );
}

export default Team;
