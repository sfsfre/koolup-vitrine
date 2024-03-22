import React from 'react';

const Box = () => {
  return (
    <div className="flex justify-center" style={{ background: 'rgba(255, 236, 228, 1)', padding: '1%' }}>
      <div className="w-1/3 pr-4">
        <img src="/pasta.png" alt="Pasta" className="" />
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center p-1">
  <h1 className="font-bold  lg:text-5xl mb-2 text-purple-900 font-Mastery-Kingdom">We are here to enjoy</h1>
  <h1 className="font-bold  lg:text-5xl mb-9 text-orange-500 font-Mastery-Kingdom">the full experience</h1>

  <p className="lg:text-2xl text-center mb-20">
  Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
Lorem ipsum dolor sitLorem ipsum dolor sit
  </p>
  <div className="flex">
  <button className="py-4 px-6 bg-orange-500 text-white  mr-6 text-xl " style={{borderRadius:'25px'}}>Reserve a table</button>
  <button className="py-4 px-6 bg-purple-900 text-white  ml-20 text-xl "style={{borderRadius:'25px'}}>Order Food</button>
</div>


</div>

      <div className="w-1/3 pl-4">
        <img src="/shawarma.png" alt="Shawerma" />
      </div>
    </div>
  );
}

export default Box;
