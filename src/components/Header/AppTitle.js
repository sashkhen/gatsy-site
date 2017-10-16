import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from '../Link'

const Heading = styled.h1`
  margin: 0;
`;

const AppTitle = ({ appTitle }) => (
  <Heading>
    <Link to="/" name={appTitle} />
  </Heading>
);

AppTitle.propTypes = {
  appTitle: PropTypes.string,
}

export default AppTitle
