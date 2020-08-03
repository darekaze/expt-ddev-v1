import React from 'react'
import tw, { styled, theme } from 'twin.macro'

const StyledFooter = styled.footer`
  background: ${theme`colors.bg`};
  border-top: 1px solid #eaeaea;
  ${tw`
    w-full h-24
    flex items-center justify-center
  `}
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
        tw='flex justify-center items-center'>
        Powered by
        <img src='/vercel.svg' alt='Vercel Logo' tw='ml-2 h-8' />
      </a>
    </StyledFooter>
  )
}

export default Footer
