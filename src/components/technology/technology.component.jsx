import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { ReactComponent as BLogo } from '../../assets/images/icons8-bootstrap.svg';
import { ReactComponent as SLogo } from '../../assets/images/icons8-sass.svg';
import { ReactComponent as RDLogo } from '../../assets/images/icons8-redux.svg';
import { ReactComponent as RJLogo } from '../../assets/images/icons8-react.svg';

const Technology = () => (
  <Container>
    <br />
    <h4><u>OUR TECHNOLOGY:</u></h4>
    <br />
    <Row>
      <Col>
        <Nav.Link href='https://sass-lang.com/'><SLogo width='160' height='160' /></Nav.Link>
      </Col>
      <Col>
        <Nav.Link href='https://getbootstrap.com/'><BLogo width='160' height='160' /></Nav.Link>
      </Col>
      <Col>
        <Nav.Link href='https://reactjs.org/'><RJLogo width='160' height='160' /></Nav.Link>
      </Col>
      <Col>
        <Nav.Link href='https://redux.js.org/'><RDLogo width='160' height='160' /></Nav.Link>
      </Col>
    </Row>
  </Container>
);

export default Technology;