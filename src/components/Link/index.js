import React from 'react'
import PropTypes from 'prop-types'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'

const StyledLink = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
`;

const Link = ({ to, name }) => (
  <StyledLink {...{ to }}>
    {name}
  </StyledLink>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Link;
