import React from 'react'
import { Card, Container } from 'react-bootstrap';
import gusta from '../../assets/imgs/gusta.jpeg';
// import edu from '../../assets/imgs/gusta.jpeg';
import sophie from '../../assets/imgs/sophie.jpeg';
import ste from '../../assets/imgs/ste.jpeg';
import vitor from '../../assets/imgs/vitor.jpeg';
// import nader from '../../assets/imgs/gusta.jpeg';




function Team() {

  const teammates = [
    {image: gusta, name: "Gustavo Barretto", description: ""},
    {image: "https://avatars.githubusercontent.com/u/73198111?v=4", name: "Eduardo de Araújo", description: ""},
    {image: vitor, name: "Vitor Galbier", description: ""},
    {image: ste, name: "Stefany Lovato", description: ""},
    {image: sophie, name: "Sophia Fiama", description: ""},
    {image: "https://avatars.githubusercontent.com/u/80595683?v=4", name: "Marcelo Nader", description: ""}
  ]

  return (
    <>
    <Container className="d-flex flex-column align-items-center justify-content-center gap-3">
          <h5>Team</h5>
        <Container className="d-flex aligm-itens-center justify-content-center flex-wrap gap-1">
          {teammates.map( (member, idx) => (
            <Card>
              <Card.Img src={member.image} height='400px' />
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
        </Container>
    </Container>
    </>
  );
}

export default Team;
