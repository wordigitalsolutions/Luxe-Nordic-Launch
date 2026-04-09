export default function InvitationThanks() {
  return (
    <div className="min-h-screen bg-[#060607] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans text-white selection:bg-amber-500/30">
      
      {/* Sfondo Animato Manor */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[100%] h-[100%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-900/15 via-[#060607] to-[#060607] pointer-events-none"></div>

      <div className="w-full max-w-xl bg-black/40 backdrop-blur-3xl border border-amber-900/30 rounded-[3rem] p-12 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative z-10 text-center">
        
        {/* Il Sigillo d'Oro */}
        <div className="w-24 h-24 border border-amber-500/40 rounded-full flex items-center justify-center mx-auto mb-10 bg-amber-950/20 shadow-[0_0_50px_rgba(217,119,6,0.15)]">
          <span className="text-amber-500 text-4xl font-serif italic">N</span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl text-white font-light mb-6 tracking-tight">
          Richiesta di Accesso <br/> <span className="text-amber-500 italic">Confermata.</span>
        </h1>
        
        <div className="space-y-6 text-zinc-400 font-light text-base leading-relaxed mb-12">
          <p>
            Il tuo profilo e stato inserito con successo nella lista d attesa prioritaria per il lancio ufficiale di <span className="text-white font-medium">The Nordic Manor</span>.
          </p>
          <div className="p-4 bg-amber-950/10 border border-amber-900/20 rounded-2xl">
            <p className="text-xs text-amber-500 font-bold uppercase tracking-widest mb-1">Founder Privilege</p>
            <p className="text-sm italic text-zinc-300">
              Abbiamo riservato i tuoi 100 Crediti Founder. Saranno accreditati automaticamente al tuo primo accesso.
            </p>
          </div>
          <p className="text-sm italic text-zinc-500">
            Il club opera su base strettamente limitata. Riceverai i dettagli per l attivazione dell account e le novita sul portafoglio modelle direttamente al tuo indirizzo email riservato.
          </p>
        </div>

        <div className="pt-8 border-t border-zinc-900">
          <a href="/invitation" className="text-[10px] tracking-[0.4em] text-zinc-600 hover:text-amber-500 uppercase transition-colors font-bold">
            ← Torna all Atrio
          </a>
        </div>
      </div>
    </div>
  );
}