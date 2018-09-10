import React, {Component} from 'react';
import { Dropdown, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signOut } from 'app/actions';

const options = [
  { key: 1, text: 'Profile' },
  { key: 2, text: 'Log out ' }
]

const StyledDropdown = styled(Dropdown)`
  color : 'white';
`

const StyleDropdownMenu = styled(Dropdown.Menu)`
  display : none;
`

class NameDropdown extends Component {

  render() {
    const { dropdownDisplay } = this.props;

    return (
      <StyledDropdown
        basic
        floating
        defaultOpen={false}
        icon='dropdown'
        labeled
        text={dropdownDisplay}
        style={{ color: 'white' }}
      >
        <StyleDropdownMenu direction='left' open={false} style={{ display : 'none' }}>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.signOut()}>Log out</Dropdown.Item>
        </StyleDropdownMenu>
      </StyledDropdown>
    );
  }
}

NameDropdown = connect(null, { signOut })(NameDropdown);

export { NameDropdown} 