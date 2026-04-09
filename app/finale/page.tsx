export default function FinalPage() {
  return (
    <div className="min-h-screen bg-[#040405] text-zinc-100 font-sans flex items-center justify-center p-6 relative overflow-hidden selection:bg-amber-500/40">
      
      {/* Sfondo Animato Gold */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-[#040405] to-[#040405]"></div>
      </div>

      {/* Scritta gigante di sfondo */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-5">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[180px] font-black italic text-amber-500 rotate-[-10deg] whitespace-nowrap">
          RESERVED
        </span>
      </div>

      <div className="relative z-20 text-center max-w-xl w-full bg-black/60 backdrop-blur-3xl border border-amber-900/40 p-12 md:p-16 rounded-[3rem] shadow-[0_0_100px_-20px_rgba(217,119,6,0.3)]">
        
        {/* Il Sigillo */}
        <div className="mb-10 relative">
          <div className="w-24 h-24 border-2 border-amber-500/30 rounded-full flex items-center justify-center mx-auto bg-amber-950/20 shadow-[0_0_40px_rgba(217,119,6,0.15)]">
            <span className="text-amber-500 text-4xl font-serif italic">N</span>
          </div>
          <div className="absolute inset-0 animate-pulse border-2 border-amber-500/10 rounded-full w-24 h-24 mx-auto scale-125"></div>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-white font-black italic mb-6 leading-tight">
          Candidatura in <br/> <span className="text-amber-500 font-light">Archivio.</span>
        </h1>
        
        <div className="space-y-6 text-zinc-400 font-light text-base leading-relaxed mb-10">
          <p>
            Il tuo profilo e il materiale visivo sono stati correttamente trasferiti nella nostra cassaforte crittografata. 
          </p>
          <p className="italic text-zinc-300">
            Il nostro team di Management avviera ora la fase di screening estetico. Verrai contattata entro 48 ore tramite i recapiti forniti in caso di riscontro positivo.
          </p>
        </div>

        <div className="pt-8 border-t border-amber-900/20">
          <p className="text-[10px] tracking-[0.4em] text-amber-500 uppercase font-bold mb-4">
            Luxe Nordic Digital
          </p>
          <p className="text-[10px] text-zinc-600 uppercase font-medium">
            Copenhagen • London • Dubai
          </p>
        </div>
      </div>
    </div>
  );
}