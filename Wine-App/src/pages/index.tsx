import Head from 'next/head';
import React from 'react';

export default function Home() {
  const path = window.location.pathname;
  console.log(path);
  return (
    <div>
      <Head>
        <title> Wine</title>
      </Head>
    </div>
  );
}
