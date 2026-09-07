import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, UserPlus, ChevronDown, Award, GraduationCap, Briefcase, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { NOTARY_INFO } from '../data/notariaData';
import { downloadNotaryVCard } from '../utils/vcard';
import { motion, AnimatePresence } from 'motion/react';

interface ProfileSectionProps {
  onContactClick: (type: 'call' | 'whatsapp' | 'email') => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onContactClick }) => {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [vcardSaved, setVcardSaved] = useState(false);

  const handleSaveContact = () => {
    downloadNotaryVCard();
    setVcardSaved(true);
    setTimeout(() => setVcardSaved(false), 4000);
  };

  return (
    <div className="w-full mb-8 md:mb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        
        {/* Left column: Photo and CV accordion */}
        <div className="md:col-span-5 flex flex-col">
          {/* Portrait Container */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl overflow-hidden shadow-md border border-gray-200/80 bg-gray-100 mb-3 mx-auto md:mx-0">
            <img
              src={NOTARY_INFO.portraitUrl}
              alt={NOTARY_INFO.name}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs bg-black/50 backdrop-blur-xs py-1 px-2.5 rounded-lg border border-white/10">
              <span className="font-semibold">{NOTARY_INFO.name}</span>
              <span className="block text-[10px] text-gray-200">{NOTARY_INFO.title}</span>
            </div>
          </div>

          {/* CV Accordion Button */}
          <button
            id="btn-ver-cv"
            onClick={() => setIsCvOpen(!isCvOpen)}
            className="w-full max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0 flex items-center justify-between px-4 py-2.5 bg-white rounded-xl border border-gray-300 text-[#1c3d36] text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all shadow-xs"
            aria-expanded={isCvOpen}
          >
            <span>{isCvOpen ? 'Ocultar Currículum Vitae' : 'Ver Currículum Vitae'}</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                isCvOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* CV Expanded Content */}
          <AnimatePresence>
            {isCvOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden w-full max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0 mt-3"
              >
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-xs text-gray-700 space-y-4">
                  <div>
                    <h4 className="flex items-center gap-1.5 font-bold text-[#1c3d36] uppercase tracking-wider text-[11px] mb-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#1c3d36]" /> Formación Académica
                    </h4>
                    <ul className="space-y-2 pl-1 border-l-2 border-[#1c3d36]/30 ml-1">
                      {NOTARY_INFO.curriculum.education.map((edu, idx) => (
                        <li key={idx} className="pl-2">
                          <p className="font-semibold text-gray-900">{edu.title}</p>
                          <p className="text-gray-500 text-[10px]">{edu.institution} • {edu.year}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-1.5 font-bold text-[#1c3d36] uppercase tracking-wider text-[11px] mb-2">
                      <Briefcase className="w-3.5 h-3.5 text-[#1c3d36]" /> Trayectoria Profesional
                    </h4>
                    <ul className="space-y-2 pl-1 border-l-2 border-[#1c3d36]/30 ml-1">
                      {NOTARY_INFO.curriculum.experience.map((exp, idx) => (
                        <li key={idx} className="pl-2">
                          <p className="font-semibold text-gray-900">{exp.role}</p>
                          <p className="text-gray-500 text-[10px]">{exp.organization} • {exp.period}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-1.5 font-bold text-[#1c3d36] uppercase tracking-wider text-[11px] mb-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1c3d36]" /> Membresías y Certificaciones
                    </h4>
                    <ul className="space-y-1 text-[11px] text-gray-600 list-disc list-inside">
                      {NOTARY_INFO.curriculum.certifications.slice(0, 2).map((cert, idx) => (
                        <li key={idx}>{cert}</li>
                      ))}
                      {NOTARY_INFO.curriculum.affiliations.map((aff, idx) => (
                        <li key={idx} className="font-medium text-gray-800">{aff}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right column: 4 High-Contrast Action Buttons (2x2 Grid matching screenshot) */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-4 pt-2 md:pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
            
            {/* Button 1: Contáctame (Solid Dark Teal) */}
            <button
              id="btn-contactame"
              onClick={() => onContactClick('call')}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1c3d36] hover:bg-[#142d28] active:scale-[0.98] text-white font-medium text-sm sm:text-base rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Contáctame</span>
            </button>

            {/* Button 2: Email (White with border) */}
            <button
              id="btn-email"
              onClick={() => onContactClick('email')}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-gray-50 active:scale-[0.98] text-[#1c3d36] font-medium text-sm sm:text-base rounded-xl border border-gray-300 hover:border-gray-400 transition-all shadow-xs cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#1c3d36]" />
              <span>Email</span>
            </button>

            {/* Button 3: WhatsApp (Solid Dark Teal) */}
            <button
              id="btn-whatsapp"
              onClick={() => onContactClick('whatsapp')}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1c3d36] hover:bg-[#142d28] active:scale-[0.98] text-white font-medium text-sm sm:text-base rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp</span>
            </button>

            {/* Button 4: Guardar Contacto (White with border) */}
            <button
              id="btn-guardar-contacto"
              onClick={handleSaveContact}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-gray-50 active:scale-[0.98] text-[#1c3d36] font-medium text-sm sm:text-base rounded-xl border border-gray-300 hover:border-gray-400 transition-all shadow-xs cursor-pointer"
            >
              {vcardSaved ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">¡Contacto Guardado!</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4 text-[#1c3d36]" />
                  <span>Guardar Contacto</span>
                </>
              )}
            </button>

          </div>

          {/* Quick Schedule & Info Bar */}
          <div className="bg-[#f0f5f3] rounded-xl p-3.5 border border-[#d2e4dc] flex flex-wrap items-center justify-between gap-2 text-xs text-[#234b42]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold">Atención Presencial y Telemática:</span>
              <span>{NOTARY_INFO.hours}</span>
            </div>
            <span className="text-[11px] bg-white text-[#1c3d36] px-2 py-0.5 rounded-md font-medium border border-[#c3ded4]">
              {NOTARY_INFO.canton}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
