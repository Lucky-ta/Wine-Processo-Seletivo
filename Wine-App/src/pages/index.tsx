/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import SearchLeftBar from '../components/SearchLeftBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Wine</title>
      </Head>

      <Header />
      <SearchLeftBar />
      <main>
        <h1>Hello Wine</h1>
      </main>
    </div>
  );
}
