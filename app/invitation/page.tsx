export default function InvitationPage() {
  return (
    <div className="min-h-screen bg-[#060607] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans text-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="w-full max-w-md bg-black/40 backdrop-blur-2xl border border-amber-900/30 rounded-3xl p-10 shadow-[0_20px_60px_-10px_rgba(217,119,6,0.15)] relative z-10 text-center">
        <h1 className="text-3xl tracking-wide mb-2 font-light">The Nordic Manor</h1>
        <p className="text-xs text-amber-500 uppercase tracking-[0.2em] mb-8 font-medium">Private Digital Club - Copenaghen</p>
        <form action="https://formspree.io/f/xdapjqon" method="POST" className="space-y-5">
          <input type="hidden" name="_next" value="https://luxe-nordic-launch-s22y.vercel.app/thanks" />
          <input type="hidden" name="Origine" value="Uomini" />
          <div className="text-left">
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-2 pl-1">Accesso Prioritario</label>
            <input name="Email" type="email" placeholder="Inserisci email" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 text-sm font-light" />
          </div>
          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-black font-semibold tracking-widest py-4 px-4 rounded-xl transition-all shadow-lg text-xs uppercase">Unisciti alla Lista</button>
        </form>
      </div>
    </div>
  );
}