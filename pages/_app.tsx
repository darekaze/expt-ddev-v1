/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/GlobalStyle'

import 'tailwindcss/dist/base.min.css' // eslint-disable-line

// TODO: add global layout here

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
