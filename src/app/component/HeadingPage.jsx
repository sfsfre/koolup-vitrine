import React from 'react';

const HeadingPage = () => {
  return (
   
    <div style={{display:'flex'}}>
      {/* Partie gauche avec l'image */}
      <div className="w-1/2 p-4" style={{ justifyContent: 'center', paddingTop: '5%', paddingLeft:'8%'}}>
        <img src="/Heading.png" alt="Heading" className='mx-auto mb-8' />
        <p className='text-base md:text-lg lg:text-xl xl:text-3xl font-poppins font-normal leading-relaxed' style={{ lineHeight: '1.5em', color: 'grey', fontSize: 20 }}>
  Are you craving a delectable meal but don't want to leave the <br />
  comfort of your home? Or perhaps you're seeking the perfect <br />
  ambiance for a memorable dining experience? Look no further than <br />
  Kool'Up - your all-in-one solution for food delivery, restaurant <br />
  exploration, and table reservations.
</p>

  <span  style={{  width: '18%',
    height: '4vh', // Ajustez la hauteur en fonction de vos besoins
    position: 'absolute',
    top: '59vh', // Ajustez la position verticale en fonction de vos besoins
    left: '8vw',
    padding: '1.5vh 3.5vw 1.5vh 3.5vw',
    borderRadius: '5vw', // Ajustez le rayon de bordure en fonction de vos besoins
    background: 'rgba(226, 112, 61, 1)',
    color: 'white',
    textAlign: 'center',
    lineHeight: '5vh',
    maxWidth: '100%',
    fontSize: '1.2vw', }}>
    Explore our restaurants Gallery
  </span>

  <img src='/foods.png' alt="Image" className='mx-auto my-6' style={{ marginTop: '14%' }} />

</div>


      {/* Right Part */}
      <div className="w-1/2 p-4"  style={{paddingLeft: '18%', justifyContent: 'center', display:'flex'}}>
        <img src='/Frame.png' alt="Second Image" className='mx-auto' />
      </div>
    </div>
    
  );
};

export default HeadingPage;