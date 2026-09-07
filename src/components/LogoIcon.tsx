import React from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10 text-[#1b3d36]" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Elegant notarial spiral seal emblem */}
      <path
        d="M50,10 A40,40 0 1,0 90,50 A40,40 0 0,0 50,10 Z M50,22 C65.46,22 78,34.54 78,50 C78,65.46 65.46,78 50,78 C34.54,78 22,65.46 22,50 C22,37.2 30.6,26.4 42.4,23.2 C41.2,27.5 40.5,32.1 40.5,36.8 C40.5,49.5 50.8,59.8 63.5,59.8 C66.8,59.8 70,59.1 72.8,57.7 C70.6,68.4 61.2,76.5 50,76.5 C35.4,76.5 23.5,64.6 23.5,50 C23.5,35.4 35.4,23.5 50,23.5 L50,22 Z M54,34 C50.7,34 48,36.7 48,40 C48,43.3 50.7,46 54,46 C57.3,46 60,43.3 60,40 C60,36.7 57.3,34 54,34 Z"
        fillRule="evenodd"
      />
    </svg>
  );
};
