import React from 'react';
import { StarsBackground as Stars } from './stars-background';

export const StarsBackground = () => {
  return (
    <Stars
      starDensity={0.0002}
      allStarsTwinkle={true}
      twinkleProbability={0.8}
      minTwinkleSpeed={0.3}
      maxTwinkleSpeed={0.8}
    />
  );
};