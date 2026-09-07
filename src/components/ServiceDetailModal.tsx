import React, { useState } from 'react';
import { NotaryService } from '../types';
import { X, CheckSquare, Square, Clock, Scale, FileText, MessageSquare } from 'lucide-react';
import { NOTARY_INFO } from '../data/notariaData';
import { motion } from 'motion/react';

interface ServiceDetailModalProps {
  service: NotaryService | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  if (!service) return null;

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Notaría Sexta de Riobamba. Quisiera consultar sobre los requisitos y trámite de: *${service.name}*.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="bg-[#1c3d36] text-white p-6 relative flex items-start justify-between">
          <div className="space-y-1 pr-6">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
              Trámite Notarial
            </span>
            <h3 className="font-serif-title text-xl sm:text-2xl font-bold leading-snug">
              {service.name}
            </h3>
            <p className="text-xs text-gray-200 line-clamp-2">
              {service.shortDesc}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-700">
          
          {/* Detailed description */}
          <div>
            <h4 className="font-bold text-gray-900 mb-1.5 flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#1c3d36]">
              <FileText className="w-4 h-4 text-[#1c3d36]" /> Descripción del Acto
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed bg-gray-50 p-3.5 rounded-xl border border-gray-200/80">
              {service.fullDesc}
            </p>
          </div>

          {/* Interactive Requirements Checklist */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#1c3d36]">
                <CheckSquare className="w-4 h-4 text-[#1c3d36]" /> Requisitos Obligatorios
              </h4>
              <span className="text-[11px] text-gray-500">
                Lista de verificación:
              </span>
            </div>

            <div className="space-y-2">
              {service.requirements.map((req, idx) => (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                    checkedItems[idx]
                      ? 'bg-emerald-50/70 border-emerald-300 text-gray-900'
                      : 'bg-white border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <button
                    type="button"
                    className="mt-0.5 text-[#1c3d36] flex-shrink-0"
                    aria-label="Check requirement"
                  >
                    {checkedItems[idx] ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Square className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                  <span className={`text-xs leading-relaxed ${checkedItems[idx] ? 'line-through text-gray-500' : ''}`}>
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Metadata Info Pills (Time, Legal, Tariff) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-[#f3f7f5] rounded-xl border border-[#d5e6df] space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#1c3d36]">
                <Clock className="w-3.5 h-3.5" /> Tiempo Estimado
              </div>
              <p className="text-gray-700">{service.estimatedTime}</p>
            </div>

            <div className="p-3 bg-[#f3f7f5] rounded-xl border border-[#d5e6df] space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#1c3d36]">
                <Scale className="w-3.5 h-3.5" /> Base Legal
              </div>
              <p className="text-gray-700">{service.legalBase}</p>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex items-center justify-between gap-3">
          <a
            href={`https://wa.me/593${NOTARY_INFO.phoneMobile.substring(1)}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1c3d36] hover:bg-[#142d28] text-white text-xs font-semibold rounded-xl transition-colors shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl border border-gray-300 transition-colors shadow-xs cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </motion.div>
    </div>
  );
};
