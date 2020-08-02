import React from 'react'
import tw from 'twin.macro'

// TODO: add header, social and footer here

const Base = tw.div`
  w-full min-h-screen
  flex flex-col items-center justify-center
`

const BaseLayout: React.FC = ({ children }) => {
  return <Base>{children}</Base>
}

export default BaseLayout
