import React from 'react';

const HeadingPage = () => {
  return (
   
    <div style={{display:'flex',height:'80vh'}}>
      {/* Partie gauche avec l'image */}
      <div className="w-1/2 p-4" style={{ justifyContent: 'center', paddingTop: '5%', paddingLeft:'8%'}}>
        <img src="/Heading.png" alt="Heading" className='mx-auto mb-10' style={{width: '150%',
    top: '20vh', 
    left: '5vw',}} />

        <p className='text-base md:text-lg lg:text-xl xl:text-2xl font-poppins font-normal leading-relaxed' 
        style={{ lineHeight: '1.5em', color: 'grey', fontSize: '100%',  top: '25vh', left: '3vw',  }}>
  Are you craving a delectable meal but don't want to leave the <br />
  comfort of your home? Or perhaps you're seeking the perfect <br />
  ambiance for a memorable dining experience? Look no further than <br />
  Kool'Up - your all-in-one solution for food delivery, restaurant <br />
  exploration, and table reservations.
</p>


<span style={{ 
  width: '25%',
  left: '8px',
  padding: '6px 14px', // Ajustez les valeurs de padding selon vos besoins
  borderRadius: '20px', // Ajustez le rayon de la bordure selon vos besoins
  background: 'rgba(226, 112, 61, 1)',
  color: 'white',
  textAlign: 'center',
  lineHeight: '80px',
  fontSize: '20px', // Ajustez la taille de la police selon vos besoins
}}>
 Explore our restaurants Gallery
</span>


  <img src='/foods.png' alt="Image" style={{ Top: '5%' }} />

</div>


      {/* Right Part */}
      <div className="w-1/2 p-4"  style={{paddingLeft: '9%', justifyContent: 'center'}}>
        <img src='/Frame.png' alt="Second Image" className='mx-auto' />
      </div>
    </div>
    
  );
};

export default HeadingPage;