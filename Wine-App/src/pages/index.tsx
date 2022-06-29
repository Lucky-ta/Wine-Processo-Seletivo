/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Wine</title>
      </Head>

      <main>
        <Header />
        <h1>Hello Wine</h1>
      </main>
    </div>
  );
}
