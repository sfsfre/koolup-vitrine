import React from 'react';
import Rectangle from '../component/Rectangle';

const AboutUs = () => {
    return (
        <div> 
        <div style={{display:'flex',height:'70vh'}}>
          {/* Partie gauche avec l'image */}
        <div className="w-1/2 p-6" style={{ justifyContent: 'center', paddingTop: '4%',  paddingLeft: '8vw'}}>
          <h1 className="font-bold  lg:text-6xl mb-6  text-purple-900  font-Mastery-Kingdom" >Meet, eat and enjoy the true tastes with us</h1>
    
    
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl font-poppins font-normal leading-relaxed p-10 py-5 ml' 
            style={{ lineHeight: '2em', color: 'grey', fontSize: '120%',  top: '25vh' ,paddingLeft: '0.5vw' }}>
      Whether you're gathering around the table with loved ones, ordering<br/> in for a cozy night at home, or exploring new culinary<br/> adventures, Kool'up is here to make every dining experience <br/>memorable. With our easy-to-use online platform,<br/> fast delivery service, intuitive app, and <br/>round-the-clock support, we ensure that every moment spent with <br/>us is filled with satisfaction and delight.
    </p>
   <img src='/foods.png' alt="Image" style={{ Top: '10%',paddingRight:'20%' }} />
    
    </div>
    
    
          {/* Right Part */}
          <div className="w-1/2 p-4"  style={{paddingRight: '6%', justifyContent: 'center'}}>
            <img src='/Frame.png' alt="Second Image" className='mx-auto' />
          </div>




        </div>
        

<div><Rectangle/></div>
<div className="flex justify-center" >
      <img src="/adham.png" alt="Logo" className=" py-20 top-10 " />
    </div>


</div>

      );
    };
    

export default AboutUs;
