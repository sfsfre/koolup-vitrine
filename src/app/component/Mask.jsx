import React from 'react';

const Mask = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cover">
      {/* Conteneur flexbox */}
      <div className="flex flex-col items-center">
        {/* Image de fond */}
        <img src="/Mask.png" alt="Logo" className="w-full  bg-cover" />

        {/* Formulaire et bouton */}
        <div className="flex items-center border border-gray-400 rounded-md mt-8">
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2" />
          <button className="px-10 py-2 bg-orange-500 text-white rounded-md">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Mask;