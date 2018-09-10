import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Popup
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NameDropdown } from 'app/modules/auth/components/nameDropdown';
import SignIn from 'app/modules/auth/signIn';
import Register from 'app/modules/auth/register';

class DesktopContainer extends Component {
  state = {
    isLoginPopupOpen: false,
    isRegisterPopupOpen: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { authenticated } = nextProps;

    if (authenticated) {
      return {
        isLoginPopupOpen : false,
        isRegisterPopupOpen : false
      }
    }

    return null;
  }

  hideFixedMenu = () => {
    this.setState({ fixed: false });
  }

  showFixedMenu = () => {
    this.setState({ fixed: true });
  }

  onOpenRegisterPopup = () => {
    this.setState({ isRegisterPopupOpen: true })

    if (this.state.isLoginPopupOpen) {
      this.setState({ isLoginPopupOpen: false })
    }
  }

  onOpenLoginPopup = () => {
    this.setState({ isLoginPopupOpen: true });

    if (this.state.isRegisterPopupOpen) {
      this.setState({ isRegisterPopupOpen: false })
    }
  }

  onCloseLoginPopup = () => {
    this.setState({ isLoginPopupOpen: false })
  }

  onCloseRegisterPopup = () => {
    this.setState({ isRegisterPopupOpen: false })
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
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
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

const mapStateToProps = state => {
  const { auth } = state;

  return {
    authenticated: auth.authenticated,
    displayName: (auth.user || {}).displayName || ''
  }
}

export default connect(mapStateToProps)(DesktopContainer);
