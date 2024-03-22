import React from 'react';

const Telephone = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-full">
        <img src="/Rect.png" alt="Rect" className="w-full" />
        <div className="absolute inset-0 flex justify-between items-center px-64">
          {/* Contenu à gauche de l'image */}
          <div className="text-left text-white w-1/1 p-13">
            <h2 className="text-5xl font-bold mb-10 text-orange-500">Try our app now</h2>
           <div>
          
            <p className="text-2xl">Discover the most convenience in food ordering. Explore irresistible discounts and step into a realm of delightful culinary delights.</p>
            <div className="flex items-center">
  <p className="mr-1 p-3">Available on:</p></div>
            <div className="flex">
    <button className="flex items-center   px-4 py-1 bg-orange-500 text-white mr-7 font-bold"style={{borderRadius:'20px'}}>
      <img src="/play.png" alt="Logo 1" className="w-10 mr-2" />
      Play Store
    </button>
    <button className="flex items-center  px-4 py-2 bg-orange-500 text-white font-bold ml-5"style={{borderRadius:'20px'}}>
      <img src="/app.png" alt="Logo 2" className="w-13 mr-2" />
      App Store 
    </button>
    </div>
    </div>
            
          </div>
          {/* Image au centre */}
          <img src="/tele.png" alt="Telephone" className="py-auto" style={{ width: '200%',paddingBottom:'15%'  }} />
        </div>
      </div>
    </div>
    
  );
};

export default Telephone;
