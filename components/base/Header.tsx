import React from 'react'
import tw, { styled, theme } from 'twin.macro'

const StyledHeader = styled.header`
  background: ${theme`colors.bg`};
  ${tw`
    fixed top-0 z-10 w-full p-3
    flex flex-row items-center justify-between
  `}
`

const Header: React.FC = () => {
  // TODO: make border color #29c5c5 and py = 2 after scroll
  return (
    <StyledHeader>
      <div tw='mx-auto' />
      <div tw='hidden sm:inline'>
        <a href='#!'>Blog</a>
        <a href='#!'>Resources</a>
      </div>

      {/* TODO: make and change to svg logo */}
      <a
        href='/'
        css={{
          fontWeight: 'bold',
          textTransform: 'none',
        }}>
        DaR
      </a>
      {/* TODO: add mobile menu button here */}
    </StyledHeader>
  )
}

export default Header
