import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInWithEmail } from '../actions';
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
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
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
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
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