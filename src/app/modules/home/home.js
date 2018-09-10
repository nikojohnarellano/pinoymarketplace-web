import PropTypes from 'prop-types'
import React from 'react'
import {
  Segment
} from 'semantic-ui-react';
import DesktopContainer from './desktopContainer';
import MobileContainer from './mobileContainer';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>

    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout;