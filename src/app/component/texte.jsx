import React from 'react';

const Texte = () => {
  return (
    <div className="flex flex-col lg:flex-row p-20">
      {/* Première partie */}
      <div className=" lg:w-1/2  flex flex-col justify-center items-center" >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center">We are more than <br/>multiple services</h1>
        <p className=" text-black text-4lg lg:text-2xl" style={{marginTop:'4%'}}>
    Lorem ipsum site amet consectetur. Curbitur<br />
    sit ipsum  neque scelerisque adipicing fringilla.<br />
    Est amet sapien cursus morbi non netus.
  </p>
  <button
          className="py-4 px-6 bg-orange-500 text-white   text-xl " style={{borderRadius:'25px'}}>About us

              </button>
      </div>
      
 
  {/* Deuxième partie */}
  <div className="w-full lg:w-1/2 p-10 flex justify-center items-center">
    <div className="flex flex-wrap justify-center w-full">
      {/* Première image */}
      <div className="w-full lg:w-1/2 ">
      <div className="w-3/5 flex flex-col justify-center items-center" style={{ background: 'rgba(52, 23, 72, 1)', borderRadius: '25px' }}>       
         <img src="/Group1.png" className="w-1/8 mb-5 p-6" alt="Image 1" />
          <div className="text-white text-center">
            <p className="font-bold text-lg">Online order</p>
            <p className="text-sm">lorem ipsumlorem ipsum</p>
          </div>
        </div>
      </div>
      {/* Deuxième image */}
      <div className="w-full lg:w-1/2 p-3">
      <div className="w-3/5 flex flex-col justify-center items-center" style={{ background: 'rgba(52, 23, 72, 1)', borderRadius: '25px' }}>       
         <img src="/Group2.png" className="w-1/8 mb-5 p-7" alt="Image 2" />
          <div className="text-white text-center">
            <p className="font-bold text-lg">Fast delivery</p>
            <p className="text-sm">lorem ipsumlorem ipsum</p>
          </div>
        </div>
      </div>
      {/* Troisième image */}
      <div className="w-full lg:w-1/2 p-2">
      <div className="w-3/5 flex flex-col justify-center items-center" style={{ background: 'rgba(52, 23, 72, 1)', borderRadius: '25px' }}>        
        <img src="/Group3.png" className="w-1/8 mb-5 p-3" alt="Image 3" />
          <div className="text-white text-center">
            <p className="font-bold text-lg">Easy to order</p>
            <p className="text-sm">lorem ipsumlorem ipsum</p>
          </div>
        </div>
      </div>
      {/* Quatrième image */}
      <div className="w-full lg:w-1/2 p-2">
      <div className=" w-3/5 flex flex-col justify-center items-center" style={{ background: 'rgba(52, 23, 72, 1)', borderRadius: '25px' }}>
          <img src="/Vect.png" className="w-1/8 mb-5 p-5" alt="Image 4" />
          <div className="text-white text-center">
            <p className="font-bold text-lg">24/7 Support</p>
            <p className="text-sm">lorem ipsumlorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};


export default Texte;
