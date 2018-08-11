import React from 'react';
import { Dropdown, Header } from 'semantic-ui-react';
import styled from 'styled-components';

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

export const NameDropdown = ({ dropdownDisplay }) => (
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
      <Dropdown.Item>Log out</Dropdown.Item>
    </StyleDropdownMenu>
  </StyledDropdown>
);