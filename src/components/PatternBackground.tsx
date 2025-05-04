
import React from 'react';

const PatternBackground: React.FC = () => {
  return (
    <div className="pattern-background">
      <svg className="pattern-dots" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <pattern id="dots-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#1a91ea" opacity="0.3" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots-pattern)" />
      </svg>
      
      <svg className="pattern-waves" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="wave-pattern" patternUnits="userSpaceOnUse" width="200" height="200" patternTransform="scale(0.5 0.5)">
            <path d="M0,100 C40,130 60,70 100,100 C140,130 160,70 200,100 C240,130 260,70 300,100 C340,130 360,70 400,100" 
                  fill="none" stroke="#22ba6a" strokeWidth="2" opacity="0.15"/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern)" />
      </svg>
    </div>
  );
};

export default PatternBackground;
