import { useState } from 'react'
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-violet-500">
          DevTask AI
        </h1>

        <p className="mt-4 text-slate-400">
          Sistema inteligente de gerenciamento de tarefas
        </p>

        <button className="mt-8 rounded-lg bg-violet-600 px-6 py-3 font-medium hover:bg-violet-500 transition">
          Começar agora
        </button>
      </div>
    </main>
  );
}

export default App;
