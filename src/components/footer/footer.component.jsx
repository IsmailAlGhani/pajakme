import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { ReactComponent as IGLogo } from '../../assets/images/icons8-instagram.svg';
import { ReactComponent as LILogo } from '../../assets/images/icons8-linkedin.svg';
import { ReactComponent as GHLogo } from '../../assets/images/icons8-github.svg';
import './footer.styles.scss';

const Footer = () => (
 <div className='footer'>
  <Container className='icon-logo'>
    <Nav.Link href='https://www.instagram.com/d_mail6/'><IGLogo width='48' height='48' /></Nav.Link>
    <Nav.Link href='https://www.linkedin.com/in/IsmailAlGhani/'><LILogo width='48' height='48' /></Nav.Link>
    <Nav.Link href='https://github.com/IsmailAlGhani'><GHLogo width='48' height='48' /></Nav.Link>
  </Container>
  <div className='created-by'>
    <p>© Copyright 2020 | Design by <strong>Ismail Al Ghani</strong></p>
  </div>
 </div>
);

export default Footer;