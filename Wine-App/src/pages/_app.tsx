/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../../styles/global';
import MyProvider from '../contexts/MyProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </MyProvider>
  );
}

export default MyApp;
