import PropTypes from 'prop-types'
import React from 'react'
import {
  Segment
} from 'semantic-ui-react';
import DesktopContainer from './desktopContainer';
import MobileContainer from './mobileContainer';
import MainRoutes from 'app/routes/mainRoutes';
import styled from 'styled-components';

const HomeContainer = styled(Segment)`
  padding-right: 10px;
  padding-left: 10px;
`

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
    <HomeContainer className={'feed-container'} vertical>
      <MainRoutes />
    </HomeContainer>
  </ResponsiveContainer>
)

export default HomepageLayout;