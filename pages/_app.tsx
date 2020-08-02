/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/layouts/GlobalStyle'
import BaseLayout from '@/layouts/BaseLayout'
import SEO from '@/next-seo.config'

import 'tailwindcss/dist/base.min.css' // eslint-disable-line

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <DefaultSeo {...SEO} />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  )
}

export default MyApp
