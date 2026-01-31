
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Artist } from './components/Artist';
import { Concert } from './components/Concert';
import { Details } from './components/Details';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FanZone } from './components/FanZone';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="relative overflow-hidden">
      {/* Navigation - Simple & Elegant */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/90 backdrop-blur-sm text-white py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl font-cinzel tracking-widest uppercase">Braulio Soncco</div>
        <button 
          onClick={toggleModal}
          className="bg-gold hover:bg-gold/80 text-obsidian font-bold py-2 px-6 rounded-none transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
        >
          COMPRAR ENTRADAS
        </button>
      </nav>

      <main>
        <Hero onBuyClick={toggleModal} />
        <Artist />
        <Concert />
        <FanZone />
        <Details onBuyClick={toggleModal} />
      </main>

      <Footer />

      {/* Persistence Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button 
          onClick={toggleModal}
          className="bg-terracotta text-white font-bold p-4 rounded-full shadow-2xl animate-bounce flex items-center justify-center"
          title="Comprar ahora"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        </button>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default App;
