import React from 'react'
import tw from 'twin.macro'
import { Header, Footer } from '@/components/base'

// TODO: add header, social and footer here

const Base = tw.div`
  w-full min-h-screen
  flex flex-col items-center
`

const Main = tw.main`
  flex flex-grow flex-col
  items-center justify-center
`

const BaseLayout: React.FC = ({ children }) => {
  return (
    <Base>
      <Header />
      {/* Social Bar */}
      <Main>{children}</Main>
      <Footer />
    </Base>
  )
}

export default BaseLayout
