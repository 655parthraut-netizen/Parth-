import React from 'react';

function Hero() {
  const handleShopNow = () => {
    alert('Welcome to the store! Enjoy shopping our latest electronics.');
  };

  return (
    <div style={{
      backgroundColor: '#e6fffa',
      padding: '60px 20px',
      textAlign: 'center',
      borderBottom: '1px solid #b2f5ea'
    }}>
      <h1 style={{ color: '#234e52', fontSize: '36px', marginBottom: '10px' }}>
        Smart Electronics for a Peaceful Life
      </h1>
      <p style={{ color: '#2d3748', fontSize: '18px', marginBottom: '25px' }}>
        Discover high-quality gadgets designed to make your day smoother.
      </p>
      <button 
        onClick={handleShopNow} 
        style={{
          backgroundColor: '#319795',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Hero;