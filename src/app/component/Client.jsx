import React from 'react';
import Head from 'next/head';

const Client = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Head>
        <title>TESTIMONIALS</title>
      </Head>
      <p className="text-center text-orange-500 text-3xl mb-6">TESTIMONIALS</p>
      <p className="text-center text-purple-900 text-6xl font-bold py-2 px-4 mb-4">Our Client Reviews</p>
      <img src="/client.png" alt="Logo" className=" w-full" />
    </div>
  );
}

export default Client;
