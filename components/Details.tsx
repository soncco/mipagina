
import React from 'react';

interface DetailsProps {
  onBuyClick: () => void;
}

export const Details: React.FC<DetailsProps> = ({ onBuyClick }) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">
        
        <div className="flex-1 bg-stone-100 p-8 md:p-12 border-l-8 border-terracotta">
          <h3 className="text-3xl font-cinzel mb-8 text-obsidian">Agéndalo hoy</h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-terracotta p-3 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-xs text-stone-500">Fecha</p>
                <p className="text-xl font-cinzel text-obsidian">Sábado 18 de Enero</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-terracotta p-3 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-xs text-stone-500">Lugar</p>
                <p className="text-xl font-cinzel text-obsidian">Teatro Municipal</p>
                <p className="text-stone-500 text-sm">Calle San Juan de Dios, Centro Histórico</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-terracotta p-3 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-xs text-stone-500">Hora</p>
                <p className="text-xl font-cinzel text-obsidian">08:00 PM</p>
                <p className="text-stone-500 text-sm">Apertura de puertas: 07:30 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white border border-stone-200">
             <p className="text-terracotta font-bold text-lg mb-2">⚠ ¡Quedan pocas entradas!</p>
             <p className="text-stone-600 text-sm">Asegura tu lugar en las zonas preferenciales antes de que se agoten. Venta solo por este medio oficial.</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center text-center p-8 bg-obsidian text-white relative overflow-hidden">
          {/* Subtle pattern or graphic */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
               <path d="M0 50 Q 25 0 50 50 T 100 50" />
            </svg>
          </div>

          <h3 className="text-3xl md:text-5xl font-cinzel mb-6">No te quedes fuera</h3>
          <p className="text-stone-400 mb-10 max-w-sm">Vive la magia de la música latinoamericana con la voz de Braulio Soncco.</p>
          
          <button 
            onClick={onBuyClick}
            className="w-full max-w-md bg-gold hover:bg-gold/80 text-obsidian font-bold py-6 px-12 text-xl rounded-none transition-all duration-300 transform hover:scale-105 shadow-2xl tracking-widest"
          >
            COMPRAR MI ENTRADA
          </button>
          
          <div className="mt-8 flex gap-4 grayscale opacity-60">
            <div className="h-8 w-12 bg-stone-300"></div>
            <div className="h-8 w-12 bg-stone-300"></div>
            <div className="h-8 w-12 bg-stone-300"></div>
          </div>
          <p className="mt-4 text-stone-500 text-xs uppercase tracking-widest">Pago 100% Seguro</p>
        </div>

      </div>
    </section>
  );
};
