import React from 'react';
import { Container, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './web-info.styles.scss';

const WebInfo = () => (
  <Container className='web-info'>
    <h4>MY WEBSITE</h4>
    <h6>The name of this application is Pajakme. This application is a prototype of the PajakInd application. This application has 2 features.</h6>
    <br />
    <div className='list-features'>
      <h5>LIST FEATURES</h5>
      <ListGroup>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipLog}
        >
          <ListGroup.Item action variant='secondary'><strong>Login & Logout</strong></ListGroup.Item>
        </OverlayTrigger>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipDash}
        >
          <ListGroup.Item action variant='secondary'><strong>Dashboard</strong></ListGroup.Item>
        </OverlayTrigger>
      </ListGroup>
    </div>
  </Container>
);

const renderTooltipLog = (props) => (
  <Tooltip id="info-tooltip" {...props}>
    This feature to authentication user login and logout
  </Tooltip>
);

const renderTooltipDash = (props) => (
  <Tooltip id="info-tooltip" {...props}>
    This feature to show data table about colors
  </Tooltip>
);

export default WebInfo;