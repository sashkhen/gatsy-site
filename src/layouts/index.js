import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import 'normalize.css/normalize.css'

import Header from '../components/Header'

import Content from './Content'

import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header appTitle={data.site.siteMetadata.title} />
    <Content>{children()}</Content>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query AppQuery {
    site {
      siteMetadata {
        title,
        description,
        keywords,
      }
    }
  }
`

export default TemplateWrapper
