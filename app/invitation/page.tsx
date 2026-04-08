export default function InvitationPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Effetto luce di sfondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Card Centrale */}
      <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 shadow-2xl relative z-10 text-center">
        
        {/* Logo Icona Minimal */}
        <div className="w-12 h-12 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        </div>

        <h1 className="text-3xl font-light text-white tracking-widest uppercase mb-2">
          The Nordic Manor
        </h1>
        <p className="text-zinc-400 text-sm mb-8 font-light tracking-wide">
          Private Digital Club • Copenaghen
        </p>

        <form className="space-y-4">
          <div className="text-left">
            <label htmlFor="email" className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
              Richiedi Accesso Prioritario
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="Inserisci la tua email" 
              required
              className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium tracking-wide py-3 px-4 rounded-lg transition-colors"
          >
            Unisciti alla Lista d'Attesa
          </button>
        </form>

        <p className="text-xs text-amber-500/70 mt-6 font-light">
          I primi 50 membri riceveranno 100 Crediti Founder all'apertura.
        </p>
      </div>
    </div>
  );
}