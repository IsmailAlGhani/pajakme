import React from 'react';
import { Jumbotron, Tabs, Tab } from 'react-bootstrap';
import WebInfo from '../web-info/web-info.component';
import Technology from '../technology/technology.component';
import './homepage.styles.scss';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'info',
    }
  }


  handleTab = (event) => {
    this.setState({activeTab: event});
  }

  render() {
    const { activeTab } = this.state;
    return(
      <div className='homepage'>
        <Jumbotron fluid>
          <h1>Hello, Everyone</h1>
          <p>
            This is my simple project to apply Frontend Engineer in PajakInd.
          </p>
        </Jumbotron>
        <div className='info-tab'>
          <Tabs id='web-info' activeKey={activeTab} onSelect={key => this.handleTab(key)}>
            <Tab eventKey="info" title="Bio">
              <WebInfo />
            </Tab>
            <Tab eventKey="technology" title="Technology">
              <Technology />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Homepage;