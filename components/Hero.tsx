
import React from 'react';

interface HeroProps {
  onBuyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/453/1920/1080" 
          alt="Andean Landscape Backdrop" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="text-gold font-cinzel tracking-widest text-lg md:text-xl block mb-4 animate-fade-in">
          CUSCO · PERÚ
        </span>
        <h1 className="text-4xl md:text-7xl lg:text-8xl text-white font-cinzel mb-6 leading-tight drop-shadow-lg">
          La Esencia de los Andes: <br/> 
          <span className="text-terracotta">10 Años</span> de Alma
        </h1>
        <p className="text-stone-300 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Braulio Soncco celebra una década de trayectoria en una noche inolvidable de música latinoamericana.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-left md:border-r border-stone-600 md:pr-8 pr-0 pb-4 md:pb-0">
            <p className="text-gold font-bold uppercase tracking-widest text-sm">Fecha</p>
            <p className="text-white text-xl font-cinzel">18 de Enero</p>
          </div>
          <div className="text-left md:pl-4">
            <p className="text-gold font-bold uppercase tracking-widest text-sm">Lugar</p>
            <p className="text-white text-xl font-cinzel">Teatro Municipal</p>
          </div>
        </div>

        <button 
          onClick={onBuyClick}
          className="mt-12 bg-terracotta hover:bg-terracotta/90 text-white font-bold py-5 px-12 text-xl rounded-none shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 tracking-widest"
        >
          RESERVA TU ENTRADA AHORA
        </button>
        
        <p className="mt-6 text-stone-400 text-sm animate-pulse">
          ¡Entradas limitadas! No te quedes fuera de esta noche histórica.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-stone-500 uppercase tracking-widest text-xs mb-2">Explorar</span>
        <div className="w-[1px] h-12 bg-gold/50 animate-bounce"></div>
      </div>
    </section>
  );
};
