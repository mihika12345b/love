import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import nanImage from './images/nan.jpeg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shootingStarAnimation = keyframes`
  from {
    transform: translateX(-100%) translateY(-100%);
  }
  to {
    transform: translateX(100vw) translateY(100vh);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  position: relative;
`;

const GlassPanel = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  animation: ${slideIn} 0.5s ease-out 0.3s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  margin: 0.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background-color: #e94560;
  color: #ffffff;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
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

function App() {
  const [showShootingStar, setShowShootingStar] = useState(false);
  const [stars, setStars] = useState([]);

  const handleYesClick = () => {
    setShowShootingStar(true);
    if (!stars.length) {
      const interval = setInterval(() => {
        setStars((prevStars) => [...prevStars, Date.now()]);
        setTimeout(() => {
          setStars((prevStars) => prevStars.slice(1));
        }, 2000);
      }, 500);

      return () => clearInterval(interval);
    }
  };

  return (
    <Container>
      <GlassPanel>
        <Image src={nanImage} alt="Nandini" />
        <Title>I love you to the moon and back Nandiniii!</Title>
        <Button onClick={handleYesClick}>I love you too!</Button>
      </GlassPanel>
      {showShootingStar && stars.map((star) => <ShootingStar key={star} />)}
    </Container>
  );
}

export default App;

