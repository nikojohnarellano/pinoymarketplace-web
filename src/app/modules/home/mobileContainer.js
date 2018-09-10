import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Popup
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NameDropdown } from 'app/modules/auth/components/nameDropdown';
import SignIn from 'app/modules/auth/signIn';
import Register from 'app/modules/auth/register';

class MobileContainer extends Component {
  state = {
    isLoginPopupOpen: false,
    isRegisterPopupOpen: false
  }

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
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

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
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
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const mapStateToProps = state => {
  const { auth } = state;

  return {
    authenticated: auth.authenticated,
    displayName: (auth.user || {}).displayName || ''
  }
}

export default connect(mapStateToProps)(MobileContainer)