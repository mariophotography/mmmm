import React, { useState, useEffect } from 'react';
import { LogoIcon } from './LogoIcon';

const FADE_IMAGES = [
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80', // Justice & law
  'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=1200&q=80', // Columns & architecture
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80', // Legal library & books
  'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80', // Protocol & signing
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', // Notary office
];

export const HeaderCard: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % FADE_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full overflow-hidden bg-white rounded-2xl md:rounded-3xl border border-gray-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] mb-6 md:mb-8 transition-all">
      {/* Background Crossfade Images with smooth fade transition */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {FADE_IMAGES.map((imgUrl, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentImageIndex ? 'opacity-25' : 'opacity-0'
            }`}
          >
            <img
              src={imgUrl}
              alt="Notaría Sexta Riobamba"
              className="w-full h-full object-cover grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      {/* Subtle Gradient Overlays for optimal contrast and legibility */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-white/90 via-white/80 to-white/90 pointer-events-none" />

      {/* Centered Content on Top */}
      <div className="relative z-10 p-6 sm:p-10 md:p-12 flex flex-col items-center justify-center text-center gap-3">
        {/* Logo Emblem Box */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl flex items-center justify-center border border-[#d3e2dc] shadow-sm mb-1">
          <LogoIcon className="w-7 h-7 sm:w-10 sm:h-10 text-[#1c3d36]" />
        </div>

        {/* Title and Subtitle Centered */}
        <div className="space-y-1 sm:space-y-2">
          <h1 className="font-serif-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.14em] text-[#1c3d36] uppercase leading-tight">
            NOTARÍA SEXTA
          </h1>
          <p className="font-serif-subtitle text-base sm:text-lg md:text-2xl text-[#3b4c48] font-normal italic tracking-wide">
            del Cantón Riobamba
          </p>
        </div>
      </div>
    </header>
  );
};

