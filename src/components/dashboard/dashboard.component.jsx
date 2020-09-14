import React from 'react';
import axios from 'axios';
import { Table, Form, Button } from 'react-bootstrap';
import './dashboard.styles.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      search: ''
    }
  }
  async componentDidMount() {
    await axios.get('https://reqres.in/api/unknown').then(Response => {
      this.setState({colors: Response.data.data});
    })
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({[ name ]: value});
  }

  handleSubmit = async event => {
    event.preventDefault();

    var colors;
    await axios.get('https://reqres.in/api/unknown').then(Response => {
      colors = Response.data.data;
    })

    const { search } = this.state;

    const newColors = colors.filter(color => (color.id.toString().includes(search) || color.name.includes(search) || color.year.toString().includes(search) || color.color.includes(search) ))
    this.setState({colors: newColors});
  }

  render() {
    const { colors } = this.state;
    return (
      <div className='dashboard'>
        <br />
        <h3>Color Data</h3>
        <Form className='justify-content-end' onSubmit={this.handleSubmit} inline>
          <Form.Group controlId="SearchColor">
            <Form.Label srOnly>Search</Form.Label>
            <Form.Control name='search' onChange={this.handleChange} className='mb-2 mr-sm-2' placeholder="Search Color" />
          </Form.Group>
          <Button variant="primary" className='mb-2' type="submit">
            Submit
          </Button>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Year</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {colors.map(item => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td>{item.color}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Dashboard;