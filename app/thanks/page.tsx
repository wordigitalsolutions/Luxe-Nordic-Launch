export default function ThankYouPage() {
    return (
      <div className="min-h-screen bg-[#060607] text-zinc-200 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-[#060607] to-[#060607] pointer-events-none"></div>
        
        <div className="relative z-10 text-center space-y-6">
          <div className="w-20 h-20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-8 bg-amber-950/10">
            <span className="text-4xl">🗝️</span>
          </div>
          <h1 className="font-serif text-4xl text-white font-light">Richiesta Ricevuta.</h1>
          <p className="max-w-xs mx-auto text-zinc-400 font-light leading-relaxed">
            La tua candidatura è stata presa in carico dal nostro team. Riceverai un riscontro via email entro le prossime 24 ore.
          </p>
          <div className="pt-8">
            <a href="/invitation" className="text-xs tracking-[0.3em] text-amber-500 uppercase hover:text-amber-400 transition-colors">
              Torna alla Home
            </a>
          </div>
        </div>
      </div>
    );
  }