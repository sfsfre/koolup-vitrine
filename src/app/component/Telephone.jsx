import React from 'react';

const Telephone = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-full">
        <img src="/Rect.png" alt="Rect" className="w-full " />
        <div className="absolute inset-0 flex justify-between items-center px-64">
          {/* Contenu à gauche de l'image */}
          <div className="text-left text-white w-1/1 p-22">
            <h2 className="text-6xl  font-bold mb-5 text-orange-500">Try our app now</h2>
           <div>
          
            <p className="text-3xl p-1 py-10 ">Discover the most convenience in food ordering. Explore irresistible discounts and step into a realm of delightful culinary delights.</p>
            <div className="flex items-center">
  <p className=" text-2xl  font-semibold">Available on</p></div>
            <div className="flex">
    <button className="flex items-center   w-52 px-4 py-1 bg-orange-500 text-white mr-7 font-bold"style={{borderRadius:'20px'}}>
      <img src="/play.png" alt="Logo 1" className="w-5 mr-5" />
      PlayStore
    </button>
    <button className="flex items-center  w-52 px-4 py-2 bg-orange-500 text-white font-bold ml-5"style={{borderRadius:'20px'}}>
      <img src="/app.png" alt="Logo 2" className="w-5 mr-5" />
      AppStore 
    </button>
    </div>
    </div>
            
          </div>
          {/* Image au centre */}
          <img src="/tele.png" alt="Telephone" className="py-auto" style={{ width: '350%',paddingBottom:'20%'  }} />
        </div>
      </div>
    </div>
    
  );
};

export default Telephone;
