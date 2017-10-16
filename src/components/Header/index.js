import React from 'react'
import Link from 'gatsby-link'

import Navigation from '../Navigation'

import Wrapper from './Wrapper'
import AppTitle from './AppTitle'

import navLinks from './navLinks'

const Header = () => (
  <Wrapper>
    <AppTitle />
    <Navigation links={navLinks} />
  </Wrapper>
)

export default Header
