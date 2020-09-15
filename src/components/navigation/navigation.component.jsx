import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import Homepage from '../homepage/homepage.component';
import LoginForm from '../login-form/login-form.component';
import Dashboard from '../dashboard/dashboard.component';
import { Switch } from 'react-router-dom';
import { autoLogin, logUserOut } from '../../redux/user/user.actions';
import pajakLogo from '../../assets/images/logo_transparent_1.png';
import './navigation.styles.scss';

const Navigation = ({ loggedIn, logUserOut }) => (
  <div>
    <Navbar bg='light'>
      <Navbar.Brand as={Link} to='/'>
      <img
        src={pajakLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="PajakMe logo"
      />
      </Navbar.Brand>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
          {!loggedIn ?            
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            :
            <Nav.Link as={Link} to='/' onClick={logUserOut}>Logout</Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/login' component={LoginForm}/>
      <PrivateRoute loggin={loggedIn} path='/dashboard' component={Dashboard}/>
    </Switch>
  </div>
);

const PrivateRoute = ({component: Component, loggin, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      loggin ?
        <Component {...props} />
      : <Redirect to="/login" />
    )} />
  );
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = dispatch => ({
  logUserOut: () => dispatch(logUserOut()),
  autoLogin: () => {dispatch(autoLogin())}
});

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);