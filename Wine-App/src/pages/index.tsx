import Head from 'next/head';
import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

export default function Home() {
  const path = useRouter();

  useEffect(() => {
    if (path.pathname === '/') {
      Router.push('/1');
    }
  });

  return (
    <div>
      <Head>
        <title> Wine</title>
      </Head>
    </div>
  );
}
