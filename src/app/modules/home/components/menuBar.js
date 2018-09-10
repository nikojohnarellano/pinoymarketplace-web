import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Popup
} from 'semantic-ui-react';
import { NameDropdown } from 'app/modules/auth/components/nameDropdown';
import SignIn from 'app/modules/auth/signIn';
import Register from 'app/modules/auth/register';

class MenuBar extends Component {
  render() {
    const { fixed, mobile } = this.props;

    return (
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
      {
        mobile && 
        <Menu.Item onClick={this.handleToggle}>
          <Icon name='sidebar' />
        </Menu.Item>
      }
      <Container>
        <Menu.Item as='a' active>
          Home
        </Menu.Item>
        <Menu.Item as='a'>Work</Menu.Item>
        <Menu.Item as='a'>Company</Menu.Item>
        <Menu.Item as='a'>Careers</Menu.Item>
        <Menu.Item disabled position='right' active={false}>
          {
            this.props.authenticated ?
              <NameDropdown dropdownDisplay={`Hi ${this.props.displayName}!`}/>:
              <div>
                <Popup
                  trigger={
                    <Button as='a' inverted={!fixed} inverted>
                      Sign Up
                    </Button>
                  }
                  open={this.state.isRegisterPopupOpen}
                  onOpen={this.onOpenRegisterPopup}
                  onClose={this.onCloseRegisterPopup}
                  wide='very'
                  size='huge'
                  content={<Register />}
                  on='focus'
                  position='bottom right'
                />
                <Popup
                  trigger={
                    <Button as='a' inverted={!fixed} style={{ marginLeft: '0.5em' }}>
                      Log in
                    </Button>
                  }
                  open={this.state.isLoginPopupOpen}
                  onOpen={this.onOpenLoginPopup}
                  onClose={this.onCloseLoginPopup}
                  wide='very'
                  content={<SignIn />}
                  on='focus'
                  position='bottom right'
                />
              </div>
          }
        </Menu.Item>
      </Container>
      </Menu>
    )
  }
}

/*
//Mobile
<Menu 
  inverted 
  pointing 
  secondary 
  size='large'>
  <Menu.Item onClick={this.handleToggle}>
    <Icon name='sidebar' />
  </Menu.Item>
  <Menu.Item position='right' fitted disabled>
    {
      this.props.authenticated ?
        <NameDropdown dropdownDisplay={`Hi ${this.props.displayName}!`}/> :
        <div>
          <Popup
            trigger={
              <Button as='a' inverted>
                Sign Up
              </Button>
            }
            open={this.state.isRegisterPopupOpen}
            onOpen={this.onOpenRegisterPopup}
            onClose={this.onCloseRegisterPopup}
            wide='very'
            size='huge'
            content={<Register />}
            on='focus'
            position='bottom right'
          />
          <Popup
            trigger={
              <Button as='a' style={{ marginLeft: '0.5em' }}>
                Log in
              </Button>
            }
            open={this.state.isLoginPopupOpen}
            onOpen={this.onOpenLoginPopup}
            onClose={this.onCloseLoginPopup}
            wide='very'
            content={<SignIn />}
            on='focus'
            position='bottom right'
          />
        </div>
    }
  </Menu.Item>
</Menu>

//Desktop
<Menu
  fixed={fixed ? 'top' : null}
  inverted={!fixed}
  pointing={!fixed}
  secondary={!fixed}
  size='large'
>
  <Container>
    <Menu.Item as='a' active>
      Home
    </Menu.Item>
    <Menu.Item as='a'>Work</Menu.Item>
    <Menu.Item as='a'>Company</Menu.Item>
    <Menu.Item as='a'>Careers</Menu.Item>
    <Menu.Item disabled position='right' active={false}>
      {
        this.props.authenticated ?
          <NameDropdown dropdownDisplay={`Hi ${this.props.displayName}!`}/>:
          <div>
            <Popup
              trigger={
                <Button as='a' inverted={!fixed} inverted>
                  Sign Up
                </Button>
              }
              open={this.state.isRegisterPopupOpen}
              onOpen={this.onOpenRegisterPopup}
              onClose={this.onCloseRegisterPopup}
              wide='very'
              size='huge'
              content={<Register />}
              on='focus'
              position='bottom right'
            />
            <Popup
              trigger={
                <Button as='a' inverted={!fixed} style={{ marginLeft: '0.5em' }}>
                  Log in
                </Button>
              }
              open={this.state.isLoginPopupOpen}
              onOpen={this.onOpenLoginPopup}
              onClose={this.onCloseLoginPopup}
              wide='very'
              content={<SignIn onSignIn={() => {}}/>}
              on='focus'
              position='bottom right'
            />
          </div>
      }
    </Menu.Item>
  </Container>
</Menu>
*/