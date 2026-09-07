import React, { useState } from 'react';
import { FACILITIES } from '../data/notariaData';
import { FacilityImage } from '../types';
import { ZoomIn, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FacilitiesSection: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<FacilityImage | null>(null);

  return (
    <section className="w-full mb-12 md:mb-16">
      {/* Section Divider & Title matching screenshot */}
      <div className="relative flex items-center justify-center my-8">
        <div className="border-t border-gray-200 w-full absolute"></div>
        <h3 className="relative px-6 bg-[#f5f6f8] font-serif-title text-sm tracking-[0.25em] text-[#1c3d36] font-bold uppercase">
          INSTALACIONES
        </h3>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FACILITIES.map((facility) => (
          <div
            key={facility.id}
            onClick={() => setSelectedFacility(facility)}
            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            {/* Image Thumbnail */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
              <img
                src={facility.imageUrl}
                alt={facility.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-2.5 right-2.5 bg-black/40 backdrop-blur-xs p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
              <span className="absolute bottom-2 left-2.5 bg-[#1c3d36]/90 backdrop-blur-xs text-white text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md">
                {facility.tag}
              </span>
            </div>

            {/* Description */}
            <div className="p-3.5 flex-1 flex flex-col justify-between">
              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm line-clamp-1 mb-1">
                {facility.title}
              </h4>
              <p className="text-gray-500 text-[11px] line-clamp-2 leading-relaxed">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Facility Lightbox Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100"
            >
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-16/10 w-full bg-gray-900 overflow-hidden relative">
                <img
                  src={selectedFacility.imageUrl}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#1c3d36] text-white text-xs font-semibold px-3 py-1 rounded-md">
                  {selectedFacility.tag}
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#1c3d36]">
                  {selectedFacility.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedFacility.description}
                </p>
                <div className="pt-2 flex items-center justify-end">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Cerrar Vista
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
