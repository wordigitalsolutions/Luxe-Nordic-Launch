export default function CastingPage() {
  return (
    <div className="min-h-screen bg-[#060607] text-zinc-200 selection:bg-amber-500/30 font-sans pb-32 relative overflow-hidden">
      
      {/* Luci d'atmosfera */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[1000px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-[#060607] to-[#060607] pointer-events-none"></div>

      {/* 1. SEZIONE HERO */}
      <div className="relative z-10 pt-20 pb-28 px-6 text-center">
        <h1 className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-5 font-semibold">
          Luxe-Nordic Digital
        </h1>
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-white mb-5 leading-tight">
          Il tuo Scudo contro <br/>i Perditempo.
        </h2>
        <p className="max-w-xl mx-auto text-zinc-400 text-base leading-relaxed font-light italic">
          "Basta ore perse in chat infinite con chi non fa sul serio. Noi filtriamo i curiosi, tu dedichi il tuo tempo solo all'élite."
        </p>
      </div>

      {/* 2. IL FORM DI CANDIDATURA */}
      <div className="max-w-xl mx-auto px-6 -mt-16 relative z-20 mb-32">
        <div className="bg-black/40 backdrop-blur-2xl border border-amber-900/30 p-10 rounded-3xl shadow-[0_20px_60px_-10px_rgba(217,119,6,0.2)]">
          <h3 className="text-center font-serif text-2xl text-white mb-2 font-light">Candidatura Riservata</h3>
          <p className="text-center text-[10px] tracking-[0.2em] text-amber-500 uppercase mb-8 font-medium">Accesso Esclusivo • Copenaghen</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Nome Reale" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 transition-all text-sm font-light" />
              <input type="text" placeholder="Alias / Nome d'arte" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 transition-all text-sm font-light" />
            </div>
            <input type="email" placeholder="Email Privata" required className="w-full bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-amber-600 transition-all text-sm font-light" />

            <div className="space-y-3">
              <label className="block text-[10px] font-medium text-amber-500 uppercase tracking-widest pl-1">Canali Attivi</label>
              <div className="flex gap-3">
                <select className="w-1/3 bg-black/50 border border-zinc-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-amber-600 text-zinc-400 font-light">
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>X / Twitter</option>
                  <option>OnlyFans</option>
                </select>
                <input type="url" placeholder="Incolla link profilo" className="w-2/3 bg-black/50 border border-zinc-800 text-white rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-600" />
              </div>
            </div>

            <div className="space-y-3 pt-3">
              <label className="block text-[10px] font-medium text-amber-500 uppercase tracking-widest pl-1">Materiale Visivo (10 Foto + 2 Video)</label>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-dashed border-zinc-800 rounded-xl p-4 text-center hover:bg-white/5 cursor-pointer">
                  <span className="text-[10px] text-zinc-500 block">FOTO</span>
                  <input type="file" multiple className="hidden" id="f-up" />
                  <label htmlFor="f-up" className="text-[10px] text-amber-600 font-bold cursor-pointer">CARICA</label>
                </div>
                <div className="border border-dashed border-zinc-800 rounded-xl p-4 text-center hover:bg-white/5 cursor-pointer">
                  <span className="text-[10px] text-zinc-500 block">VIDEO</span>
                  <input type="file" multiple className="hidden" id="v-up" />
                  <label htmlFor="v-up" className="text-[10px] text-amber-600 font-bold cursor-pointer">CARICA</label>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold tracking-widest py-5 px-4 rounded-xl transition-all mt-5 shadow-lg text-xs uppercase">
              Invia Candidatura
            </button>
            <p className="text-center text-[9px] text-zinc-600 mt-3 font-light tracking-[0.1em]">
              Riceverai una risposta entro 24 ore dall'invio.
            </p>
          </form>
        </div>
      </div>

      {/* 3. IL METODO - I 4 Pilastri del Lusso */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-24">
        
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.4em] text-amber-500 uppercase font-semibold mb-3">Il Metodo Luxe-Nordic</h2>
          <p className="font-serif text-3xl font-light text-white">I Quattro Pilastri del Management.</p>
        </div>

        {/* Pilastro 1: Zero Perditempo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="font-serif text-3xl text-white font-light">1. Filtro Concierge<br/> <span className="text-amber-500">Solo Richieste Reali.</span></h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Ci occupiamo noi della noiosa fase iniziale, smistando le richieste e scartando chi non ha intenzioni serie o budget adeguato.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-amber-500 mt-0.5">✔</span> <div><b>Vetting totale:</b> Valutiamo la serietà dei contatti prima che arrivino a te.</div>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-amber-500 mt-0.5">✔</span> <div><b>Stop chat infinite:</b> Eliminiamo le conversazioni sterili con i curiosi.</div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-amber-900/10 to-transparent border border-amber-900/20 p-8 rounded-3xl order-1 md:order-2">
            <div className="text-amber-500 font-serif text-5xl mb-4">“</div>
            <p className="text-white text-lg font-light italic leading-relaxed">
              "Non perdo più ore al telefono. Ricevo solo contatti di gentiluomini già filtrati e pronti."
            </p>
          </div>
        </div>

        {/* Pilastro 2: Estetica Editoriale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-zinc-900/50 to-transparent border border-zinc-800 p-8 rounded-3xl">
            <div className="w-14 h-14 rounded-full bg-amber-950/30 flex items-center justify-center border border-amber-900/50 mb-6">
              <span className="text-2xl">📈</span>
            </div>
            <p className="text-white text-lg font-light italic leading-relaxed">
              Il lusso si percepisce al primo sguardo. Eleviamo i tuoi canali per attrarre follower disposti a spendere per l'esclusività.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-white font-light">2. Estetica Editoriale<br/> <span className="text-amber-500">Crescita High-End.</span></h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Gestiamo i tuoi profili social (IG, TikTok) con un approccio da brand di moda. Niente contenuti cheap o a rischio ban, solo eleganza assoluta.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-amber-500 mt-0.5">✔</span> <div><b>Strategia Anti-Shadowban:</b> Massimizziamo la visibilità rispettando le regole.</div>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-amber-500 mt-0.5">✔</span> <div><b>Montaggio Video Premium:</b> Creiamo Reel che comunicano status sociale.</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Pilastro 3: Funnel Privato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="font-serif text-3xl text-white font-light">3. Il Club Privato<br/> <span className="text-amber-500">Monetizzazione Blindata.</span></h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              I like non pagano le bollette. Il nostro sistema converte i tuoi follower in clienti paganti all'interno del nostro Club Digitale <i>The Nordic Manor</i>.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-amber-500 mt-0.5">✔</span> <div><b>Pay-per-Content:</b> Gli utenti acquistano crediti per sbloccare le tue foto o la tua chat.</div>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-amber-500 mt-0.5">✔</span> <div><b>Totale Anonimato:</b> Decidi tu chi può vedere il tuo profilo ombra nel Club.</div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/50 to-transparent border border-zinc-800 p-8 rounded-3xl order-1 md:order-2">
            <div className="w-14 h-14 rounded-full bg-amber-950/30 flex items-center justify-center border border-amber-900/50 mb-6">
              <span className="text-2xl">🗝️</span>
            </div>
            <p className="text-white text-lg font-light italic leading-relaxed">
              Nessuna piattaforma pubblica e volgare. I tuoi clienti ti troveranno solo dietro le porte chiuse della nostra Villa virtuale.
            </p>
          </div>
        </div>

        {/* Pilastro 4: Luxury Studio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-amber-900/10 to-transparent border border-amber-900/20 p-8 rounded-3xl">
            <div className="w-14 h-14 rounded-full bg-amber-950/50 flex items-center justify-center border border-amber-900 mb-6">
              <span className="text-2xl">📸</span>
            </div>
            <p className="text-white text-lg font-light italic leading-relaxed">
              Non scattare selfie in camera. Ti offriamo il set, le luci e la direzione artistica per dominare il mercato di Copenaghen.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-white font-light">4. Produzione Visiva<br/> <span className="text-amber-500">Shooting in Omaggio.</span></h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Sappiamo che per vendere lusso servono immagini di altissima fascia. Le professioniste selezionate avranno accesso al nostro team creativo.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-amber-500 mt-0.5">✔</span> <div><b>Location Esclusiva:</b> Set fotografico in loft di design a Copenaghen.</div>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-amber-500 mt-0.5">✔</span> <div><b>Portfolio Completo:</b> Materiale in 4K pronto per i social e per il Club Privato.</div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}