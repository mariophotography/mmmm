/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderCard } from './components/HeaderCard';
import { ProfileSection } from './components/ProfileSection';
import { AboutServicesSection } from './components/AboutServicesSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { LocationSection } from './components/LocationSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModals';
import { NotaryService } from './types';
import { NOTARY_INFO } from './data/notariaData';

export default function App() {
  const [selectedService, setSelectedService] = useState<NotaryService | null>(null);
  const [contactType, setContactType] = useState<'call' | 'whatsapp' | 'email' | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleContactAction = (type: 'call' | 'whatsapp' | 'email') => {
    if (type === 'whatsapp') {
      const defaultMsg = encodeURIComponent('Hola Notaría Sexta de Riobamba. Quisiera realizar una consulta sobre un trámite notarial.');
      window.open(`https://wa.me/593${NOTARY_INFO.phoneMobile.substring(1)}?text=${defaultMsg}`, '_blank');
    } else {
      setContactType(type);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#1e293b] flex flex-col selection:bg-[#1c3d36] selection:text-white py-4 sm:py-8">
      {/* Main Digital Presentation Card Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header Card matching the exact screenshot header */}
        <HeaderCard />

        {/* Profile Row: Notary Portrait + CV Dropdown + 4 High-Contrast Action Buttons */}
        <ProfileSection
          onContactClick={handleContactAction}
        />

        {/* Sobre Nosotros & Servicios Destacados Checklist + Right Column Showcase */}
        <AboutServicesSection
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* Instalaciones Section with Photo Gallery */}
        <FacilitiesSection />

        {/* Ubicación Section with Address, Phone Buttons, and Map Embed */}
        <LocationSection />

      </main>

      {/* Footer matching screenshot design */}
      <footer className="w-full border-t border-gray-200/80 bg-white/50 py-8 px-4 text-center text-xs text-gray-500 space-y-2 mt-8">
        <p>
          © 2024 Notaría Sexta del Cantón Riobamba. Todos los derechos reservados.
        </p>
        <div className="flex items-center justify-center gap-4 text-[11px] text-gray-600">
          <button
            onClick={() => setLegalModalType('privacy')}
            className="hover:underline hover:text-[#1c3d36] transition-colors cursor-pointer"
          >
            Aviso de Privacidad
          </button>
          <span>•</span>
          <button
            onClick={() => setLegalModalType('terms')}
            className="hover:underline hover:text-[#1c3d36] transition-colors cursor-pointer"
          >
            Términos de Servicio
          </button>
        </div>
      </footer>

      {/* Modals */}
      {/* 1. Service Detail Requirements Checklist Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      {/* 2. Direct Contact Modal */}
      {contactType && (
        <ContactModal
          initialType={contactType}
          onClose={() => setContactType(null)}
        />
      )}

      {/* 3. Legal Modals (Privacy / Terms) */}
      {legalModalType && (
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}
    </div>
  );
}
