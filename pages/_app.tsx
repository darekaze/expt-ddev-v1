/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import type { AppProps } from 'next/app'

import 'tailwindcss/dist/base.min.css'

// TODO: add global layout here

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
