const Home = () => {
  const containerStyle = {
    position: 'relative',
    minHeight: '100vh', // Ensures the container takes at least the full height of the viewport
  };
  const headingStyle = {
    width: '676px',
    height: '148px',
    position: 'absolute',
    top: '222px',
    left: '54px',
  };

  return (
    <div style={containerStyle}>
      <img src="/Heading.png" alt="Heading" style={headingStyle} />
    </div>
  );
};

export default Home;
