export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#040405] text-zinc-200 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-amber-500/40">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-900/10 via-[#040405] to-[#040405]"></div>
      </div>

      <div className="relative z-10 text-center max-w-lg w-full bg-black/60 backdrop-blur-3xl border border-amber-900/40 p-10 md:p-14 rounded-[2.5rem] shadow-[0_0_80px_-10px_rgba(217,119,6,0.2)]">
        <div className="w-20 h-20 border border-amber-500/50 rounded-full flex items-center justify-center mx-auto mb-8 bg-amber-950/30 text-amber-400 text-3xl shadow-[0_0_30px_rgba(217,119,6,0.2)]">
          ✓
        </div>
        
        <h1 className="font-serif text-3xl md:text-4xl text-white font-black italic mb-4 text-center">Completato.</h1>
        <p className="text-zinc-400 font-light leading-relaxed text-sm mb-10 text-center">
          Abbiamo ricevuto i tuoi dati. Per avviare ufficialmente la valutazione del tuo profilo, procedi ora con l upload del materiale visivo.
        </p>

        <div className="bg-amber-950/10 border border-amber-900/50 p-8 rounded-3xl mb-8 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 blur-2xl"></div>
          
          <span className="text-3xl block mb-4">🔒</span>
          <p className="text-xs text-amber-500 uppercase tracking-widest font-bold mb-3">Passaggio 2: Caricamento Sicuro</p>
          <p className="text-xs text-zinc-400 font-light mb-8 leading-relaxed">
            Seleziona almeno 10 foto e 3 video. I file verranno inviati direttamente alla nostra cassaforte crittografata (si aprira in una nuova scheda).
          </p>
          
          <a 
            href="https://www.dropbox.com/request/Re3JJ33EuHQJqSikEJ8x" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-amber-600 hover:bg-amber-500 text-black font-black tracking-widest py-5 px-4 rounded-xl transition-all shadow-[0_0_40px_-5px_rgba(217,119,6,0.5)] text-xs uppercase text-center"
          >
            Apri Cassaforte Upload
          </a>
        </div>

        <a 
          href="/finale" 
          className="inline-block mt-2 mb-8 text-xs tracking-widest text-amber-500 hover:text-amber-400 uppercase transition-colors font-bold border-b border-amber-500/30 hover:border-amber-400 pb-1"
        >
          Ho completato l upload →
        </a>

        <div className="block mt-4 text-center">
          <a href="/casting" className="text-[10px] tracking-[0.2em] text-zinc-600 hover:text-amber-500 uppercase transition-colors font-semibold">
            ← Torna al sito
          </a>
        </div>
      </div>
    </div>
  );
}
