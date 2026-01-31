
import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [tickets, setTickets] = useState(1);

  if (!isOpen) return null;

  const zones = [
    { name: "Zona Soncco (VIP)", price: 120, remaining: 12 },
    { name: "Preferencial", price: 85, remaining: 45 },
    { name: "General", price: 45, remaining: 98 }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl overflow-hidden shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-obsidian p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col md:flex-row">
          <div className="md:w-1/3 bg-terracotta text-white p-8">
            <h3 className="text-2xl font-cinzel mb-4">Brauilo Soncco</h3>
            <div className="space-y-4 text-sm opacity-80">
              <p>📅 18 Enero</p>
              <p>🏛 Teatro Municipal</p>
              <p>📍 Cusco, Perú</p>
            </div>
            <div className="mt-12 text-xs border-t border-white/20 pt-4 opacity-60">
              * Entradas electrónicas inmediatas.
            </div>
          </div>

          <div className="flex-1 p-8 overflow-y-auto max-h-[80vh]">
            {step === 1 ? (
              <div className="space-y-6">
                <h4 className="text-xl font-cinzel text-obsidian border-b pb-2">Selecciona tu Zona</h4>
                <div className="space-y-4">
                  {zones.map((z, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setStep(2)}
                      className="w-full flex justify-between items-center p-4 border border-stone-200 hover:border-gold hover:bg-stone-50 transition-all text-left group"
                    >
                      <div>
                        <p className="font-bold text-obsidian">{z.name}</p>
                        <p className="text-xs text-stone-500 italic">Quedan {z.remaining} entradas</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gold font-cinzel text-lg">S/ {z.price}</p>
                        <p className="text-[10px] uppercase text-stone-400 group-hover:text-gold transition-colors">Seleccionar</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-center">
                <div className="bg-stone-50 p-6">
                  <h4 className="text-xl font-cinzel mb-2">Resumen de Compra</h4>
                  <div className="flex justify-between text-stone-600 mb-4">
                    <span>Cantidad</span>
                    <div className="flex items-center gap-4">
                      <button onClick={() => setTickets(Math.max(1, tickets - 1))} className="w-6 h-6 border flex items-center justify-center">-</button>
                      <span>{tickets}</span>
                      <button onClick={() => setTickets(tickets + 1)} className="w-6 h-6 border flex items-center justify-center">+</button>
                    </div>
                  </div>
                  <div className="flex justify-between text-xl font-cinzel text-obsidian">
                    <span>Total</span>
                    <span>S/ {tickets * 85}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                   <input type="email" placeholder="Correo electrónico" className="w-full p-4 border border-stone-300 focus:border-gold outline-none" />
                   <button className="w-full bg-terracotta text-white py-4 font-bold tracking-widest hover:bg-terracotta/90 transition-colors">
                     PAGAR AHORA
                   </button>
                   <button onClick={() => setStep(1)} className="text-xs text-stone-400 uppercase tracking-widest hover:text-obsidian">
                     Volver a zonas
                   </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
