import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Navigation from '../Navigation'

import Wrapper from './Wrapper'
import AppTitle from './AppTitle'

import navLinks from './navLinks'

const Header = ({ appTitle }) => (
  <Wrapper>
    <AppTitle {...{ appTitle }} />
    <Navigation links={navLinks} />
  </Wrapper>
)

Header.propTypes = {
  appTitle: PropTypes.string,
}

export default Header
