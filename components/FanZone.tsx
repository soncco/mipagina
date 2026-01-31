
import React, { useState, useRef } from 'react';
import { editPhotoWithAI } from '../services/gemini';

export const FanZone: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImage(base64);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async () => {
    if (!image) return;
    setLoading(true);
    try {
      // Strip data prefix for API
      const base64Data = image.split(',')[1];
      const result = await editPhotoWithAI(base64Data, prompt || "Dale un toque artístico andino y elegante");
      if (result) setProcessedImage(result);
    } catch (err) {
      alert("Hubo un error procesando tu imagen con IA. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-stone-50 border-y border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-5xl font-cinzel mb-4 text-obsidian">Experiencia Fan IA</h3>
        <p className="text-stone-600 mb-12">
          Transforma tus fotos con la esencia de Braulio Soncco. Nuestra IA artística les dará un toque mágico y andino.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div 
              className="aspect-square bg-stone-200 flex items-center justify-center border-2 border-dashed border-stone-300 relative group cursor-pointer overflow-hidden"
              onClick={() => fileInputRef.current?.click()}
            >
              {image ? (
                <img src={image} className="w-full h-full object-cover" alt="Original" />
              ) : (
                <div className="text-stone-400 p-8">
                  <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="uppercase tracking-widest text-xs font-bold">Subir Foto de Fan</p>
                </div>
              )}
            </div>
            <input 
              type="file" 
              className="hidden" 
              ref={fileInputRef} 
              accept="image/*"
              onChange={handleFileChange} 
            />
            
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="¿Qué efecto quieres? (ej. Atardecer andino, sepia antiguo...)"
              className="w-full p-4 border border-stone-200 outline-none focus:border-gold font-light"
            />
            
            <button 
              onClick={handleProcess}
              disabled={loading || !image}
              className={`w-full py-4 font-bold tracking-widest transition-all ${loading ? 'bg-stone-400' : 'bg-obsidian text-white hover:bg-stone-800'}`}
            >
              {loading ? 'TRANSFORMANDO...' : 'APLICAR MAGIA IA'}
            </button>
          </div>

          <div className="space-y-6">
            <div className="aspect-square bg-stone-200 flex items-center justify-center border-2 border-stone-300 overflow-hidden shadow-inner relative">
              {loading && (
                <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-4 border-terracotta border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-4 text-xs font-cinzel text-terracotta animate-pulse">Inspirándonos en los Andes...</p>
                </div>
              )}
              {processedImage ? (
                <img src={processedImage} className="w-full h-full object-cover animate-fade-in" alt="AI Generated" />
              ) : (
                <div className="text-stone-300 p-8 text-center italic">
                  Aquí aparecerá tu recuerdo <br/> transformado...
                </div>
              )}
            </div>
            {processedImage && (
              <a 
                href={processedImage} 
                download="BraulioSoncco_FanExperience.png"
                className="block text-center text-xs uppercase tracking-widest text-gold font-bold hover:underline"
              >
                Descargar mi foto
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
