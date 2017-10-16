import React from 'react'
import PropTypes from 'prop-types'

import Link from '../Link'

import List from './List'
import Item from './Item'


const Navigation = ({ links }) => (
  <List>
    {links.map((link, i) => (
      <Item key={i}>
        <Link to={link.to} name={link.name} />
      </Item>
    ))}
  </List>
);

Navigation.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Navigation
