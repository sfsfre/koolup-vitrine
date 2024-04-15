import React from 'react';

const Resto = () => {
  return (
    <div className="relative w-full flex justify-center">
      <img src="/resto1.png" alt="restaurant" className="w-full" />
      <div className="absolute inset-0 flex justify-center items-center" style={{ backgroundColor: 'rgba(52, 23, 72, 0.5)' }}>
      <h1 className="text-white text-">Home &gt; Restaurents</h1>
      </div>
    </div>
  );
}

export default Resto;
