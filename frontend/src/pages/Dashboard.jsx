import React from 'react';

export default function Dashboard() {
  // Static state placeholders derived directly from active pipeline data
  const monthlySurplus = -8900; 
  const emiToIncomeRatio = 0.0;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* 🧭 Top Navigation bar */}
      <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex flex-wrap items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🛡️</span>
          <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            FinRelief AI
          </span>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 mt-2 md:mt-0 text-sm font-medium text-slate-300">
          <a href="#dashboard" className="hover:text-blue-400 transition-colors border-b-2 border-blue-500 pb-1">📊 Dashboard</a>
          <a href="#health" className="hover:text-blue-400 transition-colors pb-1">💚 Financial Health</a>
          <a href="#predictor" className="hover:text-blue-400 transition-colors pb-1">🔮 Settlement Predictor</a>
          <a href="#email" className="hover:text-blue-400 transition-colors pb-1">✉️ Negotiation Email</a>
          <a href="#rights" className="hover:text-blue-400 transition-colors pb-1">🛡️ Know Your Rights</a>
          <a href="#history" className="hover:text-blue-400 transition-colors pb-1">📜 History</a>
        </div>

        <button className="bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white border border-red-500/30 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all shadow-sm">
          🚪 Sign Out
        </button>
      </nav>

      {/* 🚀 Active Pipeline Header */}
      <header className="max-w-7xl mx-auto px-6 pt-6">
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-2.5 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>V4 Engine Connected</span>
          </div>
          <span className="text-xs font-mono text-slate-400">Workspace / Active Pipeline</span>
        </div>
      </header>

      {/* 📊 Metrics Container Grid */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Financial Dashboard Overview</h1>
          <p className="text-slate-400 mt-2 text-sm">Real-time analytical metrics tracking your active debt liabilities and settlement pathways.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Monthly Surplus (Deficit Warning State) */}
          <div className="bg-slate-800 border border-red-500/20 hover:border-red-500/40 rounded-2xl p-6 shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase">Monthly Surplus</h3>
              <span className="text-xs bg-red-500/10 text-red-400 px-2.5 py-1 rounded-full font-semibold">Deficit Alert</span>
            </div>
            <p className="text-4xl font-extrabold text-red-400 tracking-tight">
              ₹{monthlySurplus.toLocaleString('en-IN')}
            </p>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
              Deficit matching active consumer profile stress thresholds.
            </p>
          </div>

          {/* Card 2: EMI-to-Income Ratio */}
          <div className="bg-slate-800 border border-slate-700/60 hover:border-blue-500/30 rounded-2xl p-6 shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase">EMI-To-Income Ratio</h3>
              <span className="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-full font-semibold">Calculated</span>
            </div>
            <p className="text-4xl font-extrabold text-slate-100 tracking-tight">
              {emiToIncomeRatio.toFixed(1)}%
            </p>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
              Healthy debts thresholds classification standard is below 30.0%.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}