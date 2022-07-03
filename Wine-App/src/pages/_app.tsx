/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../../styles/global';
import MyProvider from '../contexts/MyProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <div />;
  }
  return (
    <MyProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </MyProvider>
  );
}

export default MyApp;
