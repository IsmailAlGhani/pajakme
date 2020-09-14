import React from 'react';
import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component.jsx';
import { autoLogin } from './redux/user/user.actions';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.props.autoLogin();
  }

  render () {
    return (
      <div className="App">
        <Navigation />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  autoLogin: () => dispatch(autoLogin())
});

export default connect(null,mapDispatchToProps)(App);
