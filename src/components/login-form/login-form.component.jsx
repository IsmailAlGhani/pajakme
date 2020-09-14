import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './login-form.styles.scss';
import {connect} from 'react-redux';
import { fetchAccount } from '../../redux/user/user.actions';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({[ name ]: value});
  }

  handleLogin = async event => {
    event.preventDefault();

    try {
      await this.props.fetchAccount(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {loggedIn} = this.props;
    if (loggedIn) {
      return <Redirect to='/pajakme/dashboard' />
    }
    return (
      <Form onSubmit={this.handleLogin} className='login-form'>
        <br />
        <h3 className='header-form'>LOGIN</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchAccount: (userInfo) => dispatch(fetchAccount(userInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);