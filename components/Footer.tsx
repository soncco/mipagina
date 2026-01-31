
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian text-white py-16 px-6 md:px-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-cinzel tracking-widest mb-4">Braulio Soncco</h2>
          <p className="text-stone-500 text-sm max-w-xs">Representando la riqueza musical de los Andes y Latinoamérica con pasión y elegancia.</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-stone-400 hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="text-stone-400 hover:text-gold transition-colors">Facebook</a>
          <a href="#" className="text-stone-400 hover:text-gold transition-colors">YouTube</a>
          <a href="#" className="text-stone-400 hover:text-gold transition-colors">Spotify</a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-stone-500 text-xs uppercase tracking-widest mb-2">Consultas y Prensa</p>
          <p className="text-gold font-bold">contacto@brauliosoncco.com</p>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-stone-900 text-center text-stone-600 text-xs">
        <p>&copy; 2024 Braulio Soncco. Todos los derechos reservados. | Diseñado para la cultura.</p>
      </div>
    </footer>
  );
};
