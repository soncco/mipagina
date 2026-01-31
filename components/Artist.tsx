
import React from 'react';

export const Artist: React.FC = () => {
  return (
    <section id="artista" className="py-24 px-6 md:px-12 bg-stone-100 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
      <div className="w-full md:w-1/2 relative group">
        <div className="absolute -inset-4 border-2 border-gold/30 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
        <img 
          src="https://picsum.photos/id/64/800/1000" 
          alt="Braulio Soncco - Artista" 
          className="relative z-10 w-full aspect-[4/5] object-cover shadow-2xl filter sepia-[0.3]"
        />
        <div className="absolute bottom-8 left-8 z-20 text-white font-cinzel text-2xl md:text-3xl bg-obsidian/60 p-4 backdrop-blur-md border-l-4 border-gold">
          10 Años de Camino
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-8">
        <div className="space-y-4">
          <h2 className="text-stone-400 uppercase tracking-widest text-sm font-bold">El Artista</h2>
          <h3 className="text-4xl md:text-5xl text-obsidian font-cinzel">Braulio Soncco</h3>
          <div className="w-20 h-1 bg-terracotta"></div>
        </div>

        <p className="text-lg text-stone-700 leading-relaxed text-justify">
          Nacido en el corazón de los Andes, Cusco, Braulio Soncco ha dedicado su vida a rescatar y reinventar las raíces de la música latinoamericana. Con una voz que parece eco de las montañas, ha llevado el folklore peruano a escenarios internacionales, manteniendo siempre su identidad auténtica y cercana.
        </p>

        <p className="text-lg text-stone-700 leading-relaxed text-justify">
          Esta gala conmemora sus <strong>10 años de carrera artística</strong>, una década de composiciones profundas y melodías que conectan con el alma de nuestro continente. Un artista que no solo canta, sino que cuenta las historias de nuestra tierra con un profesionalismo y calidad excepcionales.
        </p>

        <div className="grid grid-cols-2 gap-8 pt-6">
          <div className="border-l-2 border-stone-200 pl-4">
            <p className="text-3xl font-cinzel text-terracotta">Cusco</p>
            <p className="text-stone-500 uppercase text-xs tracking-widest">Origen e Inspiración</p>
          </div>
          <div className="border-l-2 border-stone-200 pl-4">
            <p className="text-3xl font-cinzel text-terracotta">Voz</p>
            <p className="text-stone-500 uppercase text-xs tracking-widest">Sentimiento Puro</p>
          </div>
        </div>
      </div>
    </section>
  );
};
