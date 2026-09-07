import React from 'react';
import { CheckCircle2, FileText, Info } from 'lucide-react';
import { NOTARY_SERVICES } from '../data/notariaData';
import { NotaryService } from '../types';

interface AboutServicesSectionProps {
  onSelectService: (service: NotaryService) => void;
}

export const AboutServicesSection: React.FC<AboutServicesSectionProps> = ({
  onSelectService,
}) => {
  const featuredServices = NOTARY_SERVICES.filter(s => s.isFeatured);

  return (
    <section className="w-full mb-10 md:mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Sobre Nosotros + Servicios Destacados */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          
          {/* Sobre Nosotros */}
          <div className="space-y-3">
            <h3 className="font-serif-title text-sm tracking-[0.18em] text-[#1c3d36] font-bold uppercase">
              SOBRE NOSOTROS
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
              La Notaría Sexta del Cantón Riobamba cuenta con un prestigio consolidado, brindando un servicio de excelencia desde hace décadas. Nuestra misión es garantizar la seguridad jurídica y la fe pública en cada trámite.
            </p>
          </div>

          {/* Servicios Destacados */}
          <div className="space-y-4 pt-1">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-title text-sm tracking-[0.15em] text-[#1c3d36] font-bold uppercase">
                SERVICIOS DESTACADOS:
              </h3>
              <span className="text-[11px] text-gray-500 italic hidden sm:inline">
                (Clic para ver requisitos)
              </span>
            </div>

            {/* Grid of 6 checkmark items matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {featuredServices.map((service) => (
                <button
                  key={service.id}
                  id={`btn-service-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="flex items-center gap-2.5 text-left text-gray-800 hover:text-[#1c3d36] group transition-colors cursor-pointer py-1"
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#1c3d36] group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-[#1c3d36]" />
                  </div>
                  <span className="text-sm font-medium group-hover:underline underline-offset-2">
                    {service.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Visual Frame showcasing the Notary Interior */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative w-full h-full min-h-[260px] lg:min-h-[300px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
              alt="Despacho Notaría Sexta de Riobamba"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2420]/80 via-[#1c3d36]/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-1">
                Atención con Excelencia
              </span>
              <h4 className="font-serif-title text-lg sm:text-xl font-bold mb-1 text-white">
                Seguridad Jurídica y Fe Pública
              </h4>
              <p className="text-xs text-gray-200">
                Atención personalizada para actos y contratos civiles, mercantiles y societarios.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
