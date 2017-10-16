import React from 'react'
import styled from 'styled-components'

import Link from '../Link'

import { TITLE } from '../../constants/string'

const Heading = styled.h1`
  margin: 0;
`;

const AppTitle = () => (
  <Heading>
    <Link to="/" name={TITLE} />
  </Heading>
);

export default AppTitle
