import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const shootingStarAnimation = keyframes`
  from {
    transform: translateX(-100%) translateY(-100%);
  }
  to {
    transform: translateX(100vw) translateY(100vh);
  }
`;

const ShootingStar = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1),
    0 0 20px rgba(255, 255, 255, 1);
  animation: ${shootingStarAnimation} 2s linear;
`;

export const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prevStars) => [...prevStars, Date.now()]);
      setTimeout(() => {
        setStars((prevStars) => prevStars.slice(1));
      }, 2000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <ShootingStar key={star} />
      ))}
    </>
  );
};
