export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#040405] text-zinc-200 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-lg w-full bg-black/60 border border-amber-900/40 p-10 rounded-[2.5rem] text-center">
        <div className="w-20 h-20 border border-amber-500/50 rounded-full flex items-center justify-center mx-auto mb-8 text-amber-400 text-3xl">✓</div>
        <h1 className="text-3xl text-white mb-4 italic">Completato.</h1>
        <p className="text-zinc-400 text-sm mb-10">Dati ricevuti. Procedi ora con l upload del materiale visivo.</p>
        <div className="bg-amber-950/10 border border-amber-900/50 p-8 rounded-3xl mb-8">
          <span className="text-3xl block mb-4">🔒</span>
          <p className="text-xs text-amber-500 uppercase font-bold mb-3 font-sans">Passaggio 2: Upload Sicuro</p>
          <a href="https://www.dropbox.com/request/Re3JJ33EuHQJqSikEJ8x" target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-600 text-black font-bold py-5 rounded-xl uppercase text-xs text-center">
            Apri Cassaforte Upload
          </a>
        </div>
        <a href="/finale" className="text-xs text-amber-500 uppercase font-bold border-b border-amber-500/30 pb-1">
          Ho completato l upload →
        </a>
      </div>
    </div>
  );
}
