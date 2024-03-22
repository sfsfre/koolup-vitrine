import Link from 'next/link';

const Navbar = () => {
  const NavbarStyle = {
    width: '100%',
    height: '100%', // Définir la hauteur de la navbar ici
    background: 'rgba(255, 255, 255, 1)',
    boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px', // Vous pouvez ajuster le padding selon vos besoins
  };

  const groupStyle = {
    width: '441px',
    top: '27px',
    left: '58px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: ' 10px', 
    textDecoration: 'none',

  };

  const spanStyle = {
  color: 'rgba(52, 23, 72, 1)', 
  textDecoration: 'none',
  cursor: 'pointer', // Adding cursor:pointer to indicate that it's clickable
};


  const logoStyle = {
    width: '197.99px',
    height: '30.5px',
    top: '25.16px',
    left: '621px',
  };

  const orderButtonStyle = {
    width: '140px',
    height: '38px',
    top: '21px',
    left: '994px',
    padding: '7px 25px 7px 25px ',
    borderRadius: '20px',
    gap: '10px',
    background: 'rgba(226, 112, 61, 1)',
     color: 'white',
     textDecoration: 'none',
    // display: 'flex',
    // alignItems: 'center',
  };

  const linkStyle = {
    color: 'rgba(52, 23, 72, 1)',
    textDecoration: 'none', // Remove the underline
    cursor: 'pointer',
  };

  const icon1Style = {
    width: '21.33px',
    height: '19.91px',
    top: '30px',
    left: '1189px',
  };

  const icon2Style = {
    width: '21px',
    height: '19px',
    top: '30px',
    left: '1229px',
  };

  const signInButtonStyle = {
    width: '103px',
    height: '40px',
    top: '21px',
    left: '1305px',
    padding: '7px 25px 7px 25px',
    borderRadius: '20px',
    border: '1px solid rgba(226, 112, 61, 1)',
    gap: '10px',
    color: 'rgba(226, 112, 61, 1)',
     textDecoration: 'none',
    // display: 'flex',
    // alignItems: 'center',
  };

  return (
    <div style={NavbarStyle} className="top-bar">
      <div style={groupStyle}>
        <Link href="/">
          <span style={{ ...spanStyle, ...linkStyle }}>Home</span>
        </Link>
        <Link href="/aboutus">
          <span style={{ ...spanStyle, ...linkStyle }}>About Us</span>
        </Link>
        <Link href="/restaurants">
          <span style={{ ...spanStyle, ...linkStyle }}>Restaurants</span>
        </Link>
        <Link href="/contact">
          <span style={{ ...spanStyle, ...linkStyle }}>Contact Us</span>
        </Link>
      </div>
     <div>
      <img src="/Logo.png" alt="Logo" style={logoStyle} /></div>
      <Link href="/order">
        <span style={orderButtonStyle}>Order Food</span>
      </Link>
     <div><img src="/Group.png" alt="Icon 1" style={icon1Style} /></div> 
     <div><img src="/Vector.png" alt="Icon 2" style={icon2Style} /></div> 
      <Link href="/signin">
        <span style={signInButtonStyle}>Sign In</span>
      </Link>
    </div>
  );
};

export default Navbar;
