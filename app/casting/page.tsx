export default function CastingPage() {
    return (
      <div className="min-h-screen bg-[#060607] text-zinc-200 font-sans pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[1000px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-[#060607] to-[#060607] pointer-events-none"></div>
        <div className="relative z-10 pt-20 pb-28 px-6 text-center text-white">
          <h1 className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-5 font-semibold">Luxe Nordic Digital</h1>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-5 leading-tight italic">Il tuo Scudo contro i Perditempo</h2>
          <p className="max-w-xl mx-auto text-zinc-400 text-base leading-relaxed font-light italic">Il tempo ha un valore inestimabile. Filtriamo i curiosi per farti interagire solo con il segmento elite.</p>
        </div>
        <div className="max-w-xl mx-auto px-6 -mt-16 relative z-20 mb-32 text-white">
          <div className="bg-black/40 backdrop-blur-2xl border border-amber-900/30 p-10 rounded-3xl shadow-[0_20px_60px_-10px_rgba(217,119,6,0.2)]">
            <h3 className="text-center text-2xl mb-2 font-light">Candidatura Riservata</h3>
            <p className="text-center text-[10px] tracking-[0.2em] text-amber-500 uppercase mb-8 font-medium">Accesso Esclusivo - Copenaghen</p>
            <form action="https://formspree.io/f/xdapjqon" method="POST" className="space-y-6">
              <input type="hidden" name="_next" value="https://luxe-nordic-launch-s22y.vercel.app/thanks" />
              <input type="hidden" name="Origine" value="Casting" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" name="Nome" placeholder="Nome Reale" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 text-sm font-light" />
                <input type="text" name="Alias" placeholder="Alias o Nome d'arte" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 text-sm font-light" />
              </div>
              <input type="email" name="Email" placeholder="Email Privata" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 text-sm font-light" />
              <div className="space-y-3">
                <label className="block text-[10px] font-medium text-amber-500 uppercase tracking-widest pl-1">Canali Attivi</label>
                <div className="flex gap-3">
                  <select name="Social" className="w-1/3 bg-black/50 border border-zinc-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-amber-600 text-zinc-400 font-light bg-black">
                    <option>Instagram</option><option>TikTok</option><option>Twitter</option><option>OnlyFans</option>
                  </select>
                  <input type="url" name="Link" placeholder="Link profilo" required className="w-2/3 bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-600" />
                </div>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold tracking-widest py-5 px-4 rounded-xl transition-all mt-5 shadow-lg text-xs uppercase">Invia Candidatura</button>
            </form>
          </div>
        </div>
      </div>
    );
  }