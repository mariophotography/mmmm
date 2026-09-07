import React, { useState } from 'react';
import { X, Phone, MessageSquare, Mail, Send, MapPin, CheckCircle2 } from 'lucide-react';
import { NOTARY_INFO } from '../data/notariaData';
import { motion } from 'motion/react';

interface ContactModalProps {
  initialType: 'call' | 'whatsapp' | 'email';
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ initialType, onClose }) => {
  const [activeTab, setActiveTab] = useState<'call' | 'whatsapp' | 'email'>(initialType);
  const [whatsappQuery, setWhatsappQuery] = useState(
    'Estimado Dr. Notario, solicito información para coordinar un trámite en la Notaría Sexta de Riobamba.'
  );
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    subject: 'Consulta Notarial - Notaría Sexta',
    message: ''
  });
  const [emailSent, setEmailSent] = useState(false);

  const getWhatsAppLink = () => {
    return `https://wa.me/593${NOTARY_INFO.phoneMobile.substring(1)}?text=${encodeURIComponent(whatsappQuery)}`;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client with formatted params
    const mailto = `mailto:${NOTARY_INFO.email}?subject=${encodeURIComponent(emailForm.subject)}&body=${encodeURIComponent(
      `Nombre: ${emailForm.name}\nCorreo: ${emailForm.email}\n\nMensaje:\n${emailForm.message}`
    )}`;
    window.location.href = mailto;
    setEmailSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-[#1c3d36] text-white p-6 relative flex items-start justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
              Canales Directos
            </span>
            <h3 className="font-serif-title text-xl sm:text-2xl font-bold">
              Contacto Notarial
            </h3>
            <p className="text-xs text-gray-200 mt-0.5">
              Notaría Sexta del Cantón Riobamba
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

        {/* Tab selector */}
        <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('call')}
            className={`py-3 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'call'
                ? 'bg-white text-[#1c3d36] border-b-2 border-[#1c3d36]'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Llamar</span>
          </button>

          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`py-3 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'whatsapp'
                ? 'bg-white text-[#1c3d36] border-b-2 border-[#1c3d36]'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => setActiveTab('email')}
            className={`py-3 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'email'
                ? 'bg-white text-[#1c3d36] border-b-2 border-[#1c3d36]'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-gray-700">
          
          {/* TAB 1: LLAMAR */}
          {activeTab === 'call' && (
            <div className="space-y-4">
              <p className="text-xs text-gray-600">
                Comuníquese directamente con nuestras líneas de atención notarial en Riobamba:
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${NOTARY_INFO.phoneLandline.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-4 bg-gray-50 hover:bg-emerald-50/50 rounded-2xl border border-gray-200 hover:border-emerald-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1c3d36] border border-gray-200 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Línea Fija Directa</p>
                      <p className="text-sm font-bold text-gray-900">{NOTARY_INFO.phoneLandline}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#1c3d36] bg-[#eaf2ef] px-3 py-1 rounded-lg">
                    Llamar
                  </span>
                </a>

                <a
                  href={`tel:${NOTARY_INFO.phoneMobile}`}
                  className="flex items-center justify-between p-4 bg-gray-50 hover:bg-emerald-50/50 rounded-2xl border border-gray-200 hover:border-emerald-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1c3d36] border border-gray-200 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Línea Celular / Urgencias</p>
                      <p className="text-sm font-bold text-gray-900">{NOTARY_INFO.phoneMobile}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#1c3d36] bg-[#eaf2ef] px-3 py-1 rounded-lg">
                    Llamar
                  </span>
                </a>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-600 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1c3d36] flex-shrink-0" />
                <span>Tarqui N 23-16 e/ 1ra Constituyente y Veloz (Frente a CNT)</span>
              </div>
            </div>
          )}

          {/* TAB 2: WHATSAPP */}
          {activeTab === 'whatsapp' && (
            <div className="space-y-4">
              <p className="text-xs text-gray-600">
                Redacte o elija su mensaje para iniciar el chat oficial con el equipo de la Notaría Sexta:
              </p>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-800">
                  Mensaje a enviar por WhatsApp:
                </label>
                <textarea
                  rows={4}
                  value={whatsappQuery}
                  onChange={(e) => setWhatsappQuery(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#1c3d36] focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setWhatsappQuery('Hola, requiero información para una escritura de compraventa de un inmueble en Riobamba.')}
                  className="text-[11px] bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1 rounded-md transition-colors"
                >
                  📝 Escrituras
                </button>
                <button
                  type="button"
                  onClick={() => setWhatsappQuery('Hola, deseo realizar una posesión efectiva de bienes hereditarios, ¿qué documentos necesito?')}
                  className="text-[11px] bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1 rounded-md transition-colors"
                >
                  📜 Posesión Efectiva
                </button>
                <button
                  type="button"
                  onClick={() => setWhatsappQuery('Buenas tardes, quisiera consultar el costo y requisitos para otorgar un poder especial.')}
                  className="text-[11px] bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1 rounded-md transition-colors"
                >
                  ⚖️ Poderes
                </button>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#1c3d36] hover:bg-[#142d28] text-white font-semibold text-xs rounded-xl shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Abrir Chat de WhatsApp</span>
              </a>
            </div>
          )}

          {/* TAB 3: EMAIL */}
          {activeTab === 'email' && (
            <div>
              {emailSent ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-title text-lg font-bold text-[#1c3d36]">
                    Cliente de Correo Abierto
                  </h4>
                  <p className="text-xs text-gray-600">
                    Se ha generado la solicitud dirigida a <strong>{NOTARY_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => setEmailSent(false)}
                    className="text-xs text-[#1c3d36] font-semibold underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-800">
                      Su Nombre:
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Dra. Carmen Valencia"
                      value={emailForm.name}
                      onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-800">
                      Su Correo Electrónico:
                    </label>
                    <input
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      value={emailForm.email}
                      onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-800">
                      Mensaje / Detalle de la Consulta:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describa brevemente el trámite que requiere consultar..."
                      value={emailForm.message}
                      onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#1c3d36] hover:bg-[#142d28] text-white font-semibold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Redactar y Enviar Correo</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};
