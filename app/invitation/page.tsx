export default function CastingPage() {
  return (
    <div className="min-h-screen bg-[#060607] text-zinc-200 selection:bg-amber-500/30 font-sans pb-32 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[1000px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-[#060607] to-[#060607] pointer-events-none"></div>

      <div className="relative z-10 pt-20 pb-28 px-6 text-center">
        <h1 className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-5 font-semibold">Luxe-Nordic Digital</h1>
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-white mb-5 leading-tight">Il tuo Scudo contro <br/>i Perditempo.</h2>
        <p className="max-w-xl mx-auto text-zinc-400 text-base leading-relaxed font-light italic">&quot;Basta ore perse in chat infinite con chi non fa sul serio. Noi filtriamo i curiosi, tu dedichi il tuo tempo solo all&apos;élite.&quot;</p>
      </div>

      <div className="max-w-xl mx-auto px-6 -mt-16 relative z-20 mb-32">
        <div className="bg-black/40 backdrop-blur-2xl border border-amber-900/30 p-10 rounded-3xl shadow-[0_20px_60px_-10px_rgba(217,119,6,0.2)]">
          <h3 className="text-center font-serif text-2xl text-white mb-2 font-light">Candidatura Riservata</h3>
          <p className="text-center text-[10px] tracking-[0.2em] text-amber-500 uppercase mb-8 font-medium">Accesso Esclusivo • Copenaghen</p>
          
          <form action="https://formspree.io/f/xdapjqon" method="POST" className="space-y-6">
            <input type="hidden" name="_next" value="https://IL_TUO_VERCEL.app/thanks" />
            <input type="hidden" name="Origine_Contatto" value="Casting Ragazze" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" name="Nome_Reale" placeholder="Nome Reale" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 transition-all text-sm font-light" />
              <input type="text" name="Alias" placeholder="Alias / Nome d&apos;arte" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 transition-all text-sm font-light" />
            </div>
            <input type="email" name="Email_Contatto" placeholder="Email Privata" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 transition-all text-sm font-light" />

            <div className="space-y-3">
              <label className="block text-[10px] font-medium text-amber-500 uppercase tracking-widest pl-1">Canali Attivi</label>
              <div className="flex gap-3">
                <select name="Piattaforma_Principale" className="w-1/3 bg-black/50 border border-zinc-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-amber-600 text-zinc-400 font-light">
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>X / Twitter</option>
                  <option>OnlyFans</option>
                </select>
                <input type="url" name="Link_Social" placeholder="Incolla link profilo" required className="w-2/3 bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-600" />
              </div>
            </div>

            <div className="space-y-3 pt-3">
              <label className="block text-[10px] font-medium text-amber-500 uppercase tracking-widest pl-1">Materiale Visivo (Richiesto dopo l&apos;invio)</label>
              <p className="text-xs text-zinc-500 font-light italic">
                Per garantire la tua privacy, i file pesanti non passano da qui. Dopo l&apos;invio riceverai un link sicuro via email per caricare il tuo portfolio in alta risoluzione.
              </p>
            </div>

            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold tracking-widest py-5 px-4 rounded-xl transition-all mt-5 shadow-lg text-xs uppercase">
              Invia Candidatura
            </button>
          </form>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-24">
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.4em] text-amber-500 uppercase font-semibold mb-3">Il Metodo Luxe-Nordic</h2>
          <p className="font-serif text-3xl font-light text-white">I Quattro Pilastri del Management.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="font-serif text-3xl text-white font-light">1. Filtro Concierge<br/> <span className="text-amber-500">Solo Richieste Reali.</span></h3>
            <p className="text-zinc-400 font-light leading-relaxed">Ci occupiamo noi della noiosa fase iniziale, smistando le richieste e scartando chi non ha intenzioni serie o budget adeguato.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-900/10 to-transparent border border-amber-900/20 p-8 rounded-3xl order-1 md:order-2">
            <div className="text-amber-500 font-serif text-5xl mb-4">“</div>
            <p className="text-white text-lg font-light italic leading-relaxed">&quot;Non perdo più ore al telefono. Ricevo solo contatti di gentiluomini già filtrati.&quot;</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-zinc-900/50 to-transparent border border-zinc-800 p-8 rounded-3xl">
            <span className="text-2xl mb-4 block">📈</span>
            <p className="text-white text-lg font-light italic leading-relaxed">Il lusso si percepisce al primo sguardo. Eleviamo i tuoi canali per attrarre follower disposti a spendere.</p>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-white font-light">2. Estetica Editoriale<br/> <span className="text-amber-500">Crescita High-End.</span></h3>
            <p className="text-zinc-400 font-light leading-relaxed">Gestiamo i tuoi profili social con un approccio da brand di moda. Niente contenuti cheap, solo eleganza assoluta.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="font-serif text-3xl text-white font-light">3. Il Club Privato<br/> <span className="text-amber-500">Monetizzazione Blindata.</span></h3>
            <p className="text-zinc-400 font-light leading-relaxed">Il nostro sistema converte i tuoi follower in clienti paganti all&apos;interno del nostro Club Digitale chiuso.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/50 to-transparent border border-zinc-800 p-8 rounded-3xl order-1 md:order-2">
            <span className="text-2xl mb-4 block">🗝️</span>
            <p className="text-white text-lg font-light italic leading-relaxed">I tuoi clienti ti troveranno solo dietro le porte chiuse della nostra Villa virtuale.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-amber-900/10 to-transparent border border-amber-900/20 p-8 rounded-3xl">
            <span className="text-2xl mb-4 block">📸</span>
            <p className="text-white text-lg font-light italic leading-relaxed">Ti offriamo il set, le luci e la direzione artistica per dominare il mercato di Copenaghen.</p>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-white font-light">4. Produzione Visiva<br/> <span className="text-amber-500">Shooting in Omaggio.</span></h3>
            <p className="text-zinc-400 font-light leading-relaxed">Le professioniste selezionate avranno accesso al nostro team creativo e a una location esclusiva per un portfolio in 4K.</p>
          </div>
        </div>

      </div>
    </div>
  );
}