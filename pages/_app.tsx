/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/layouts/GlobalStyle'
import BaseLayout from '@/layouts/BaseLayout'

import 'tailwindcss/dist/base.min.css' // eslint-disable-line

// TODO: add default seo here

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  )
}

export default MyApp
