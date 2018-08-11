import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInWithEmail } from 'app/actions';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class SignIn extends Component {

  state = {
    emailAddress : '',
    password : ''
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log(nextProps)
    return null;
  }

  componentDidMount() {
  }

  render() {
    return (
        <Segment textAlign='center' style={{ height: '100%', }}>
          <Grid.Column>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large'>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={e => this.setState({ emailAddress : e.target.value })}/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.password}
                onChange={e => this.setState({ password : e.target.value })}
              />
              <Button color='teal' fluid size='large' onClick={() => this.props.signInWithEmail(this.state.emailAddress, this.state.password)}>
                Login
              </Button>
            </Form>
          </Grid.Column>
        </Segment>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = ({
  signInWithEmail
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);