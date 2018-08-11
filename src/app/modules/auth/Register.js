import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Menu, Container, Form, Grid, Header, Image, Message, Transition, Segment } from 'semantic-ui-react';
import { registerUser } from 'app/actions';
import { connect } from 'react-redux';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstNameInput: '',
      lastNameInput: '',
      emailAddress: '',
      password: '',
      error: '',
      displayErrors: false,
      visible: false
    };

  }

  componentDidMount() {
    this.setState({ visible: true })
  }

  render() {
    return (
      <Segment
        textAlign='center'
        style={{ height: '100%' }}
      >
        <Grid.Column>
          <Header as='h2' color='teal' textAlign='center'>
            Create an account
          </Header>
          <Form size='large'>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='First Name'
                value={this.state.firstNameInput} onChange={e => this.setState({ firstNameInput: e.target.value })}
              />
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Last Name'
                value={this.state.lastNameInput} onChange={e => this.setState({ lastNameInput: e.target.value })}
              />
              <Form.Input
                fluid
                icon='mail'
                iconPosition='left'
                placeholder='E-mail address'
                value={this.state.emailAddress} onChange={e => this.setState({ emailAddress: e.target.value })}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.password} onChange={e => this.setState({ password: e.target.value })}
              />
              <Transition animation={'scale'} duration={500} visible={this.state.visible}>
                <Button onClick={() => this.props.registerUser(`${this.state.firstNameInput} ${this.state.lastNameInput}`, this.state.emailAddress, this.state.password)} color='teal' fluid size='large'>Sign Up</Button>
              </Transition>
          </Form>
        </Grid.Column>
      </Segment>
    );
  }
}

const styles = {
  header: {
    color: 'white',
    borderBottom: '0px',
    borderWidth: '0px'
  },
  top: {
    backgroundColor: "darkslategrey",
    height: '65px'

  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = ({ registerUser });

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);