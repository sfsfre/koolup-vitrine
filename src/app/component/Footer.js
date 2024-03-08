// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* ... Autres sections du pied de page */}
        <div >
          
          <img src="/footer.png"  style={{ width: '100%', height: '50%', top: '10%' }} />
        </div>
      </div>
      {/* <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Votre Site Web. Tous droits réservés.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
