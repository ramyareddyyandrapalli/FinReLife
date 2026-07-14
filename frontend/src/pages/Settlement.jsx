import React from 'react';

export default function Settlement({ financials, loan }) {
  const settlementOffer = (loan.outstanding * (loan.settlementRate / 100));
  const savingsAmount = loan.outstanding - settlementOffer;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
          <span>🔮</span> Settlement Predictor
        </h1>
        <p className="text-xs text-gray-500 mt-0.5">AI-powered settlement estimates for each of your loans</p>
      </div>

      {/* Target Loan Card */}
      <div className="bg-[#0b0e14] border border-gray-900/80 p-5 rounded-xl max-w-xs">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-xs font-mono font-bold text-gray-400 tracking-wider">{loan.lender}</h4>
            <h2 className="text-3xl font-black text-emerald-400 mt-1">{loan.settlementRate}%</h2>
            <p className="text-[10px] text-gray-500 mt-0.5">Suggested Settlement</p>
          </div>
          <span className="text-[9px] font-bold text-amber-400 bg-amber-400/5 border border-amber-400/20 px-2 py-0.5 rounded tracking-wider uppercase">
            {loan.riskLevel}
          </span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-900/60">
          <p className="text-lg font-bold text-gray-200">₹{settlementOffer.toLocaleString()}</p>
          <p className="text-[10px] text-gray-600 line-through">original ₹{loan.outstanding.toLocaleString()}</p>
          <div className="mt-3 bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-[10px] py-1.5 rounded text-center font-medium">
            💰 Potential saving: ₹{savingsAmount.toLocaleString()}
          </div>
        </div>
      </div>

      {/* AI Blueprint Print Box */}
      <div className="bg-[#0b0e14] border border-gray-900/80 rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xs font-bold text-gray-200 uppercase tracking-wider flex items-center gap-2">
            <span>📋</span> AI Negotiation Strategy
          </h3>
          <button className="bg-blue-600 text-white font-medium text-xs px-3 py-1 rounded-md hover:bg-blue-700 transition-colors">
            Regenerate
          </button>
        </div>
        
        <div className="bg-gray-950/50 border border-gray-900 p-5 rounded-xl font-mono text-[11px] text-gray-400 space-y-4 leading-relaxed">
          <div>
            <p className="text-gray-500">■ FINANCIAL NEGOTIATION STRATEGY</p>
            <p className="text-gray-800">===================================================</p>
          </div>
          <div>
            <p className="text-amber-400/90 font-bold">⚠️ YOUR FINANCIAL SNAPSHOT:</p>
            <p>• Monthly Surplus: ₹{financials.monthlySurplus.toLocaleString()}.00</p>
            <p>• EMI Burden: {financials.emiToIncome.toFixed(1)}% of income</p>
            <p>• Stress Level: {financials.stressLevel.toLowerCase()}</p>
          </div>
          <div>
            <p className="text-blue-400 font-bold">🎯 NEGOTIATION PLAN:</p>
            <p className="font-sans font-bold text-gray-400 mt-1">🏛️ {loan.lender}:</p>
            <p>• Outstanding: ₹{loan.outstanding.toLocaleString()}.00</p>
            <p>• Settlement Offer: {loan.settlementRate}.0% = ₹{settlementOffer.toLocaleString()}.00</p>
            <p>• Risk Level: {loan.riskLevel.split(' ')[0]}</p>
            <p>• Approach: Negotiate EMI reduction first</p>
          </div>
          <div>
            <p className="text-gray-200 font-bold">📄 KEY TALKING POINTS:</p>
            <ol className="list-decimal list-inside space-y-0.5 ml-1">
              <li>Emphasize genuine financial hardship with documentation</li>
              <li>Request interest waiver or reduction as part of settlement</li>
              <li>Get ALL settlement terms in writing before paying</li>
              <li>Ask for NOC (No-Objection Certificate) post-settlement</li>
              <li>Negotiate 'Full & Final Settlement' status for credit report</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}