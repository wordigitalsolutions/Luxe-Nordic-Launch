"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InvitationPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSuccess(true);
      } else {
        alert("Errore nell invio.");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("Errore di connessione.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060607] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans text-white selection:bg-amber-500/30">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="w-full max-w-md bg-black/40 backdrop-blur-2xl border border-amber-900/30 rounded-3xl p-10 shadow-[0_20px_60px_-10px_rgba(217,119,6,0.15)] relative z-10 text-center">
        
        {success ? (
          <div className="animate-fade-in py-8">
            <div className="w-16 h-16 border-2 border-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500 text-2xl">✓</div>
            <h2 className="font-serif text-2xl text-white mb-2">Sei in Lista.</h2>
            <p className="text-zinc-400 font-light text-sm">Il tuo posto e stato riservato. Riceverai presto istruzioni via email.</p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl tracking-wide mb-2 font-light font-serif">The Nordic Manor</h1>
            <p className="text-xs text-amber-500 uppercase tracking-[0.2em] mb-8 font-medium">Private Digital Club - Copenaghen</p>
            
            <form action="https://formspree.io/f/xdapjqon" method="POST" onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="Origine" value="Uomini Waitlist" />
              <div className="text-left">
                <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-2 pl-1">Accesso Prioritario</label>
                <input name="Email" type="email" placeholder="Inserisci email privata" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 text-sm font-light" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-amber-600 hover:bg-amber-500 text-black font-semibold tracking-widest py-4 px-4 rounded-xl transition-all shadow-lg text-xs uppercase disabled:opacity-50">
                {isSubmitting ? "Elaborazione..." : "Unisciti alla Lista"}
              </button>
            </form>
            <p className="text-[10px] text-amber-500/80 mt-6 font-light tracking-wide italic">
              I primi 50 membri riceveranno 100 Crediti Founder al momento del lancio.
            </p>
          </>
        )}
      </div>
    </div>
  );
}