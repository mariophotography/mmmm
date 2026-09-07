import React from 'react';
import { X, Shield, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[85vh]"
      >
        <div className="bg-[#1c3d36] text-white p-6 relative flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-6 h-6 text-emerald-300" />
            ) : (
              <FileCheck className="w-6 h-6 text-emerald-300" />
            )}
            <div>
              <h3 className="font-serif-title text-xl font-bold">
                {type === 'privacy' ? 'Aviso de Privacidad' : 'Términos de Servicio'}
              </h3>
              <p className="text-xs text-gray-200">
                Notaría Sexta del Cantón Riobamba
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-gray-900">
                1. Compromiso con la Protección de Datos Personales
              </p>
              <p>
                De conformidad con la Ley Orgánica de Protección de Datos Personales del Ecuador y la Ley Notarial, la Notaría Sexta del Cantón Riobamba garantiza la confidencialidad, reserva y custodia de toda la información suministrada por los comparecientes en cada acto o contrato notarial.
              </p>
              <p className="font-semibold text-gray-900">
                2. Finalidad del Tratamiento de Información
              </p>
              <p>
                Los datos recabados en este portal y en nuestra sede física se destinan exclusivamente a la verificación de identidad, confección de instrumentos públicos y cumplimiento de las obligaciones legales fijadas por el Consejo de la Judicatura y la UAFE.
              </p>
              <p className="font-semibold text-gray-900">
                3. Derechos del Titular
              </p>
              <p>
                El titular puede ejercer sus derechos de acceso, rectificación y actualización conforme al marco constitucional y normativo notarial ecuatoriano.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-gray-900">
                1. Naturaleza del Servicio Notarial
              </p>
              <p>
                La función notarial es un servicio público prestado con plena autonomía y fe pública bajo la rectoría del Consejo de la Judicatura y en estricto cumplimiento de la Ley Notarial y el Código Orgánico de la Función Judicial.
              </p>
              <p className="font-semibold text-gray-900">
                2. Validez de los Turnos y Consultas Telemáticas
              </p>
              <p>
                Los turnos agendados en esta plataforma tienen carácter organizativo para garantizar una atención fluida y sin esperas innecesarias. El otorgamiento y suscripción de escrituras y actos solemnes requieren el cumplimiento previo de los requisitos legales exigidos.
              </p>
              <p className="font-semibold text-gray-900">
                3. Aranceles y Tarifas
              </p>
              <p>
                Todos los valores cobrados por diligencias notariales corresponden estrictamente a la tabla oficial de aranceles expedida por el Pleno del Consejo de la Judicatura del Ecuador.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1c3d36] hover:bg-[#142d28] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
};
