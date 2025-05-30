import React, { useState } from 'react';

const AccountIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Couleur de remplissage par défaut et au survol
  const defaultFill = "none";
  const hoverFill = "#000000"; // Couleur noire pour le remplissage au survol
  
  return (
    <svg 
      width="44" 
      height="44" 
      viewBox="0 0 44 44" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <rect width="44" height="44" rx="8" fill="white" />
      <path 
        d="M22 23.6666C24.3012 23.6666 26.1667 21.8011 26.1667 19.4999C26.1667 17.1987 24.3012 15.3333 22 15.3333C19.6988 15.3333 17.8333 17.1987 17.8333 19.4999C17.8333 21.8011 19.6988 23.6666 22 23.6666ZM22 23.6666C18.3181 23.6666 15.3333 25.9052 15.3333 28.6666M22 23.6666C25.6819 23.6666 28.6667 25.9052 28.6667 28.6666" 
        fill={isHovered ? hoverFill : defaultFill}
        stroke="#2A2F2F" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
    </svg>
  );
};

export default AccountIcon;