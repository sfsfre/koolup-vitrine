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
import Mask from './component/mask';

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
       <Mask/>
    

    </div>
  );
};

export default Page;
