// exports.onCreateNode = ({ node }) => {
//   // console.log(node.internal.type)
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(node.internal.type)
//   }
// }

// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     const fileNode = getNode(node.parent)
//     console.log(`\n`, fileNode.relativePath)
//   }
// }

// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(createFilePath({ node, getNode, basePath: `pages` }))
//   }
// }

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
