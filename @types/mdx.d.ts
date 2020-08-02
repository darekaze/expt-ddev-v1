/* eslint-disable import/no-mutable-exports */

interface FrontMatter {
  __resourcePath: string
  layout?: string
  title: string
  publishedAt: string
  by?: string
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
  export const frontMatter: FrontMatter[]
}
