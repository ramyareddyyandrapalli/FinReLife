import React from 'react';

export default function FinancialHealth({ financials }) {
  const cards = [
    { label: 'MONTHLY INCOME', value: `₹${financials.monthlyIncome}`, border: 'border-t-gray-800' },
    { label: 'MONTHLY EXPENSES', value: `₹${financials.monthlyExpenses}`, border: 'border-t-red-900/60' },
    { label: 'MONTHLY SURPLUS', value: `₹${financials.monthlySurplus.toLocaleString()}`, valueClass: 'text-red-400', border: 'border-t-teal-900/60' },
    { label: 'LUMP SUM AVAILABLE', value: `₹${financials.lumpSum}`, border: 'border-t-purple-900/60' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 text-lg">💚</span>
          <h1 className="text-xl font-bold tracking-tight">Financial Health</h1>
        </div>
        <p className="text-xs text-gray-500 mt-0.5">Detailed analysis of your debt stress and repayment capacity</p>
      </div>

      {/* Stress Indicator Bar */}
      <div className="bg-[#0b0e14] border border-gray-900/80 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs text-emerald-400 bg-emerald-500/10 p-1.5 rounded-md">✅</span>
          <div>
            <h4 className="text-xs font-bold text-gray-200">Overall Financial Stress</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Low stress. You're managing debt well.</p>
          </div>
        </div>
        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20 tracking-wider">
          {financials.stressLevel}
        </span>
      </div>

      {/* Financial Numbers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className={`bg-[#0b0e14] border border-gray-900/80 p-5 rounded-xl border-t-2 ${card.border}`}>
            <p className="text-[9px] text-gray-500 tracking-wider font-bold uppercase">{card.label}</p>
            <p className={`text-2xl font-extrabold mt-2 tracking-tight ${card.valueClass || 'text-white'}`}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Ratio Analysis Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#0b0e14] border border-gray-900/80 p-5 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-gray-300">EMI-to-Income Ratio</span>
            <span className="text-xs font-bold text-gray-400">{financials.emiToIncome.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-950 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-[1%]" />
          </div>
          <p className="text-[10px] text-gray-600">Ideal Below 30% - Yours: {financials.emiToIncome.toFixed(1)}% — Healthy range</p>
        </div>

        <div className="bg-[#0b0e14] border border-gray-900/80 p-5 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-gray-300">Debt-to-Income Ratio</span>
            <span className="text-xs font-bold text-gray-400">{financials.debtToIncome.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-950 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-[1%]" />
          </div>
          <p className="text-[10px] text-gray-600">Ideal Below 50% - Yours: {financials.debtToIncome.toFixed(1)}% — Manageable range</p>
        </div>
      </div>

      {/* Improvement Tips Panel */}
      <div className="bg-[#0b0e14] border border-gray-900/80 p-5 rounded-xl space-y-4">
        <div>
          <h3 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
            <span>💡</span> Improvement Tips
          </h3>
          <p className="text-[10px] text-gray-500 mt-0.5">Based on your financial profile</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] text-gray-300">
          <div className="bg-gray-950/40 border border-gray-900/50 p-3 rounded-lg flex items-center gap-3">
            <span>📉</span> <span>Reduce discretionary spending to increase surplus</span>
          </div>
          <div className="bg-gray-950/40 border border-gray-900/50 p-3 rounded-lg flex items-center gap-3">
            <span>🏛️</span> <span>Contact lenders for EMI restructuring options</span>
          </div>
          <div className="bg-gray-950/40 border border-gray-900/50 p-3 rounded-lg flex items-center gap-3">
            <span>💰</span> <span>Use lump sum for highest-interest loan first</span>
          </div>
          <div className="bg-gray-950/40 border border-gray-900/50 p-3 rounded-lg flex items-center gap-3">
            <span>📋</span> <span>Track all expenses to find savings opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
}