import React from 'react';

const HeadingPage = () => {
  return (
   
    <div style={{display:'flex',height:'70vh'}}>
      {/* Partie gauche avec l'image */}
      <div className="w-1/2 p-6" style={{ justifyContent: 'center', paddingTop: '4%',  paddingLeft: '8vw'}}>
      <h1 className="font-bold  lg:text-6xl mb-6  text-purple-900  font-Mastery-Kingdom" >Kool'Up Your Ultimate 
Dining Experience</h1>


        <p className='text-base md:text-lg lg:text-xl xl:text-2xl font-poppins font-normal leading-relaxed' 
        style={{ lineHeight: '2em', color: 'grey', fontSize: '120%',  top: '25vh'  }}>
  Are you craving a delectable meal but don't want to leave the <br />
  comfort of your home? Or perhaps you're seeking the perfect <br />
  ambiance for a memorable dining experience? Look no further than <br />
  Kool'Up - your all-in-one solution for food delivery, restaurant <br />
  exploration, and table reservations.
</p>


<span style={{ 
  width: '30%',
  padding: '10px 16px', // Ajustez les valeurs de padding selon vos besoins
  borderRadius: '20px', // Ajustez le rayon de la bordure selon vos besoins
  background: 'rgba(226, 112, 61, 1)',
  color: 'white',
  textAlign: 'center',
  lineHeight: '80px',
  fontSize: '20px', // Ajustez la taille de la police selon vos besoins
}}>
 Explore our restaurants Gallery
</span>


  <img src='/foods.png' alt="Image" style={{ Top: '5%',paddingRight:'20%' }} />

</div>


      {/* Right Part */}
      <div className="w-1/2 p-2"  style={{paddingRight: '6%', justifyContent: 'center'}}>
        <img src='/Frame.png' alt="Second Image" className='mx-auto' />
      </div>
    </div>
    
  );
};

export default HeadingPage;

