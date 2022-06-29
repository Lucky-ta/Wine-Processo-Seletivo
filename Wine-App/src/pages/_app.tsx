/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
