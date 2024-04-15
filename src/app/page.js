// page.js

import React from 'react';
import HeadingPage from './component/HeadingPage';
import Rectangle from './component/Rectangle';
import Texte from './component/Texte';
import Box from './component/Box';
import Restaurants from './component/Restaurents';
import Delivery from './component/Delivery';
import Telephone from './component/Telephone';
import Client from './component/Client';

const Page = () => {
  return (
    <div>
      <HeadingPage />
      <Rectangle/>
      <Texte/>
       <Box/>
       <Restaurants/>
       <Delivery/>
       <Telephone/>
       <Client/>
    

    </div>
  );
};

export default Page;
