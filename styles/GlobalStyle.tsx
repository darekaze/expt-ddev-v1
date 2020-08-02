import React from 'react'
import { Global } from '@emotion/core'
import { css, theme } from 'twin.macro'

const GlobalStyle = () => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
        overflow-x: hidden;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        overflow-x: hidden;
        background-color: ${theme`colors.bg`};
        color: ${theme`colors.text`};
        font-family: ${theme`fonts.body`};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      svg {
        fill: currentcolor;
        vertical-align: middle;
      }
    `}
  />
)

export default GlobalStyle
