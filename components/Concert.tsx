
import React from 'react';

export const Concert: React.FC = () => {
  const points = [
    { title: "Repertorio Exclusivo", desc: "Un viaje por los clásicos latinoamericanos y nuevas composiciones de aniversario." },
    { title: "Acústica Impecable", desc: "La majestuosidad del Teatro Municipal garantiza una experiencia sonora sin igual." },
    { title: "Músicos en Vivo", desc: "Acompañamiento de maestros músicos en charango, quena, zampoña y cuerdas." },
    { title: "Atmósfera Cultural", desc: "Una puesta en escena minimalista que resalta la elegancia de nuestra identidad." }
  ];

  return (
    <section className="py-24 bg-obsidian text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">La Experiencia</h2>
          <h3 className="text-4xl md:text-6xl font-cinzel mb-6">Una Noche Inolvidable</h3>
          <p className="text-stone-400 max-w-3xl mx-auto text-lg">
            Más que un concierto, es una celebración de nuestra cultura. Sumérgete en las melodías que definen a Latinoamérica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="p-8 border border-stone-800 hover:border-gold/50 transition-colors group">
              <div className="text-gold text-2xl font-cinzel mb-4 opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
              <h4 className="text-xl font-cinzel mb-3 text-white">{p.title}</h4>
              <p className="text-stone-400 font-light">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative rounded-none overflow-hidden h-[400px] group">
          <img 
            src="https://picsum.photos/id/158/1200/600" 
            alt="Theater Atmosphere" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-obsidian/40 flex items-center justify-center p-6">
            <div className="text-center bg-obsidian/80 backdrop-blur-sm p-8 max-w-xl border-t border-b border-gold">
               <p className="text-gold font-cinzel text-2xl italic">"Braulio tiene el don de hacer que cada espectador sienta que le canta al oído."</p>
               <p className="mt-4 text-stone-400 text-sm tracking-widest uppercase">— Crítica Cultural</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
