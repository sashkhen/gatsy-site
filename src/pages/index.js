import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Heading = styled.h1`
  display: inline-block;
  border-bottom: 1px solid;
`;

const ListItem = styled.div`
  margin-bottom: 10px;
`;

const DateText = styled.span`
  color: #BBB;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  * {
    transition: color .3s ease-out;
  }

  &:hover {
    * {
      color: black;
    }
  }
`;


export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Heading>Amazing Pandas Eating Things</Heading>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <StyledLink to={node.fields.slug}>
            <ListItem>
              {node.frontmatter.title}{" "}
              <DateText>— {node.frontmatter.date}</DateText>
            </ListItem>
            <p>{node.excerpt}</p>
          </StyledLink>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {
      fields: [
        frontmatter___date
      ],
      order: DESC
    }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
