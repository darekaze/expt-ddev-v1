/* eslint-disable @typescript-eslint/no-var-requires */

const withMdxEnhanced = require('next-mdx-enhanced')({
  defaultLayout: true,
  remarkPlugins: [],
  rehypePlugins: [],
})

module.exports = withMdxEnhanced({
  /* your normal nextjs config */
})
