import React from 'react';
import { MapPin, Phone, Smartphone, Navigation, ExternalLink, Clock } from 'lucide-react';
import { NOTARY_INFO } from '../data/notariaData';

export const LocationSection: React.FC = () => {
  // Riobamba coordinates (Tarqui y Primera Constituyente, Riobamba, Ecuador)
  const lat = -1.6708;
  const lng = -78.6477;
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Notaría Sexta Riobamba, Tarqui 23-16 y Primera Constituyente, Riobamba, Ecuador")}`;
  const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;

  return (
    <section className="w-full mb-12">
      {/* Section Divider & Title matching screenshot */}
      <div className="relative flex items-center justify-center my-8">
        <div className="border-t border-gray-200 w-full absolute"></div>
        <h3 className="relative px-6 bg-[#f5f6f8] font-serif-title text-sm tracking-[0.25em] text-[#1c3d36] font-bold uppercase">
          UBICACIÓN
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Address Card + Phone Buttons matching screenshot layout */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#eaf1ee] flex items-center justify-center text-[#1c3d36] flex-shrink-0 mt-0.5 border border-[#d3e2dc]">
              <MapPin className="w-5 h-5 text-[#1c3d36]" />
            </div>
            
            <div className="space-y-1 text-gray-800 text-sm sm:text-base">
              <p className="font-semibold text-gray-900 leading-snug">
                Tarqui, N 23-16
              </p>
              <p className="text-gray-600 text-sm">
                entre Primera Constituyente y Veloz
              </p>
              <p className="text-gray-500 italic text-xs">
                (Frente a CNT)
              </p>
              <p className="font-bold text-[#1c3d36] tracking-wider pt-2 text-sm">
                RIOBAMBA - ECUADOR
              </p>
            </div>
          </div>

          {/* Phone Button 1: (03) 2399 595 (Full-width button) */}
          <a
            id="btn-phone-landline"
            href={`tel:${NOTARY_INFO.phoneLandline.replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-gray-50 active:scale-[0.99] text-[#1c3d36] font-medium text-sm sm:text-base rounded-xl border border-gray-200 hover:border-gray-300 transition-all shadow-xs group"
          >
            <Phone className="w-4 h-4 text-emerald-700 group-hover:scale-110 transition-transform" />
            <span>{NOTARY_INFO.phoneLandline}</span>
          </a>

          {/* Phone Button 2: 0984436244 (Full-width button) */}
          <a
            id="btn-phone-mobile"
            href={`tel:${NOTARY_INFO.phoneMobile}`}
            className="flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-gray-50 active:scale-[0.99] text-[#1c3d36] font-medium text-sm sm:text-base rounded-xl border border-gray-200 hover:border-gray-300 transition-all shadow-xs group"
          >
            <Smartphone className="w-4 h-4 text-emerald-700 group-hover:scale-110 transition-transform" />
            <span>{NOTARY_INFO.phoneMobile}</span>
          </a>

          {/* GPS Quick Links */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1c3d36] hover:bg-[#152e29] text-white text-xs font-semibold rounded-xl transition-all shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white hover:bg-gray-50 text-[#1c3d36] text-xs font-semibold rounded-xl border border-gray-300 transition-all shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5 text-blue-600" />
              <span>Waze GPS</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Map Frame */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="w-full h-full min-h-[300px] lg:min-h-[340px] rounded-2xl overflow-hidden border border-gray-200 shadow-xs relative bg-gray-100">
            {/* OpenStreetMap / Map Embed for Riobamba Centro */}
            <iframe
              title="Mapa de Ubicación Notaría Sexta de Riobamba"
              className="w-full h-full min-h-[300px] border-0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-78.6530%2C-1.6740%2C-78.6420%2C-1.6670&amp;layer=mapnik&amp;marker=-1.6708%2C-78.6477"
              loading="lazy"
            />
            
            {/* Floating location badge on map */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-xs p-2.5 rounded-xl border border-gray-200 shadow-md text-xs text-gray-800 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <div>
                <p className="font-bold text-[#1c3d36]">Notaría Sexta del Cantón Riobamba</p>
                <p className="text-[11px] text-gray-500">Tarqui N 23-16 e/ 1ra Constituyente y Veloz</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
