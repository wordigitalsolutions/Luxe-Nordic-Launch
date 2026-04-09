"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CastingPage() {
  const router = useRouter();
  const allPlatforms = ["Eros.dk", "DanishEscort.com", "Annoncer.dk", "Escort-Side.com", "Instagram", "TikTok", "Twitter", "OnlyFans"];
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        router.push('/thanks');
      } else {
        alert("C e stato un errore. Riprova.");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("Errore di connessione.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#040405] text-zinc-100 font-sans pb-32 relative overflow-hidden selection:bg-amber-500/40">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-[#040405] to-[#040405]"></div>
      </div>

      <div className="relative z-20 pt-20 pb-20 px-6 text-center">
        <h1 className="text-xs tracking-[0.5em] text-amber-400 uppercase mb-4 font-semibold">Luxe Nordic Digital</h1>
        <h2 className="font-serif text-4xl md:text-5xl font-black text-white mb-4 italic">Domina la Scena.</h2>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-32 relative z-20">
        <div className="bg-black/60 backdrop-blur-3xl border border-amber-900/40 p-8 md:p-12 rounded-[2.5rem] shadow-[0_0_80px_-10px_rgba(217,119,6,0.25)]">
          <h3 className="text-center font-serif text-3xl text-white mb-2 font-light italic">Candidatura Riservata</h3>
          <p className="text-center text-[10px] tracking-[0.3em] text-amber-500 uppercase mb-10 font-medium">Accesso Esclusivo - Copenaghen</p>
          
          <form action="https://formspree.io/f/xdapjqon" method="POST" onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="Origine" value="Casting Avanzato" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" name="Nome_Reale" placeholder="Nome Reale" required className="w-full bg-white/5 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-500 text-sm font-light" />
              <input type="text" name="Alias" placeholder="Alias o Nome d arte" required className="w-full bg-white/5 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-500 text-sm font-light" />
            </div>
            
            <input type="email" name="Email_Privata" placeholder="Email Privata" required className="w-full bg-white/5 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-500 text-sm font-light" />

            <div className="space-y-5 bg-black/50 p-6 rounded-2xl border border-zinc-800/50">
              <label className="block text-[11px] font-medium text-amber-500 uppercase tracking-widest">
                Portafoglio e Canali (Seleziona piattaforme)
              </label>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {allPlatforms.map(platform => (
                  <label key={platform} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      name={`Selezionato_${platform}`}
                      className="hidden" 
                      checked={selectedPlatforms.includes(platform)}
                      onChange={() => togglePlatform(platform)}
                    />
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedPlatforms.includes(platform) ? 'bg-amber-600 border-amber-600' : 'border-zinc-700 group-hover:border-amber-500'}`}>
                      {selectedPlatforms.includes(platform) && <span className="text-black text-xs font-bold">✓</span>}
                    </div>
                    <span className="text-sm text-zinc-300 font-light">{platform}</span>
                  </label>
                ))}
              </div>

              {selectedPlatforms.length > 0 && (
                <div className="pt-6 space-y-4 border-t border-zinc-800">
                  <p className="text-xs text-amber-500/70 italic">Inserisci i link per le piattaforme selezionate:</p>
                  {selectedPlatforms.map(platform => (
                    <div key={`link-${platform}`} className="animate-fade-in">
                      <input 
                        type="url" 
                        name={`Link_${platform}`} 
                        placeholder={`Incolla link profilo ${platform}`} 
                        required 
                        className="w-full bg-white/5 border border-zinc-700 text-white rounded-xl px-5 py-3 focus:outline-none focus:border-amber-500 text-sm font-light" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2 border border-dashed border-amber-900/50 p-5 rounded-2xl bg-amber-950/10 text-center">
              <span className="text-2xl block mb-2">📸</span>
              <label className="block text-xs font-medium text-amber-500 uppercase tracking-widest">Media Portfolio</label>
              <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                Il caricamento dei file pesanti avverra nel <b>Passaggio 2</b>. 
                <br/>Una volta premuto Invia, si aprira la nostra cassaforte privata.
              </p>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold tracking-widest py-5 px-4 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(217,119,6,0.4)] text-xs uppercase disabled:opacity-50">
              {isSubmitting ? "Invio in corso..." : "Invia e Vai al Caricamento"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}