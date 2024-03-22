import React from 'react';

const Rectangle = () => {


  return (
    <div className="  flex text-white h-64"  style={{ background: 'rgba(52, 23, 72, 1)' }}>
      <div className=" w-full grid grid-cols-4 items-center text-white" style={{ background: 'rgba(52, 23, 72, 1)' }}>
  <div className="flex-col text-center">
    <p className="text-8xl">99+</p>
    <br/>
    <p className="text-2xl">Satisfied clients</p>
  </div>
  <div className=" flex-col text-center">
    <p className="text-8xl">2+</p>
    <br/>
    <p className="text-2xl">Years of experience</p>
  </div>
  <div className="flex-col text-center">
    <p className="text-8xl">200+</p>
    <br/>
    <p className="text-2xl">Daily visitors</p>
  </div>
  <div className="flex-col text-center">
    <p className="text-8xl">35+</p>
    <br/>
    <p className="text-2xl">Achievements</p>
  </div>
</div>

    </div>
  );
};

export default Rectangle;
