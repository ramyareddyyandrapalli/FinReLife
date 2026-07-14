import React from 'react';

export default function Negotiation({ financials, loan }) {
  const targetSettlement = (loan.outstanding * (loan.settlementRate / 100));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
          <span>✉️</span> Negotiation Email Generator
        </h1>
        <p className="text-xs text-gray-500 mt-0.5">AI-crafted professional letters to send to your lenders</p>
      </div>

      {/* Selector Widget Strip */}
      <div className="bg-[#0b0e14] border border-gray-900/80 p-5 rounded-xl space-y-4">
        <div>
          <h3 className="text-xs font-bold text-gray-300">Generate a Negotiation Letter</h3>
          <p className="text-[10px] text-gray-500 mt-0.5">Select a loan and we'll write a professional settlement request</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 items-end">
          <div className="flex-1 w-full">
            <label className="block text-[10px] font-bold text-gray-500 mb-1">Select Loan</label>
            <select className="w-full bg-gray-950 border border-gray-800 text-xs px-3 py-2 rounded-lg text-gray-200 outline-none">
              <option>{loan.lender} — ₹{loan.outstanding.toLocaleString()}</option>
            </select>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-5 py-2 rounded-lg shadow-md transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <span>📝</span> Generate Letter
          </button>
        </div>
      </div>

      {/* Render Document Output */}
      <div className="bg-[#0b0e14] border border-gray-900/80 rounded-xl overflow-hidden">
        <div className="bg-gray-950/40 px-5 py-3 border-b border-gray-900/60 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-300 flex items-center gap-2">📄 Generated Letter</span>
          <button className="text-[11px] font-medium text-gray-400 hover:text-white px-3 py-1 bg-gray-900 border border-gray-800 rounded-md transition-colors">
            📋 Copy
          </button>
        </div>

        <div className="p-6 text-xs text-gray-400 space-y-4 max-w-3xl leading-relaxed">
          <p className="font-bold text-gray-200">Subject: Request for One-Time Settlement — Loan Account</p>
          
          <div className="space-y-0.5 text-gray-400">
            <p>To,</p>
            <p>The Settlement Department,</p>
            <p className="font-bold text-gray-200">{loan.lender}</p>
          </div>

          <p>Dear Sir/Madam,</p>
          <p>I am writing to formally request a One-Time Settlement (OTS) for my outstanding loan account.</p>

          <div>
            <p className="font-bold text-gray-300 text-[10px] uppercase tracking-wide">ACCOUNT DETAILS:</p>
            <div className="grid grid-cols-2 gap-x-4 max-w-xs mt-1 ml-2 font-mono text-[11px]">
              <span className="text-gray-500">Lender</span> <span className="text-gray-300">: {loan.lender}</span>
              <span className="text-gray-500">Outstanding Amount</span> <span className="text-gray-300">: Rs. {loan.outstanding.toLocaleString()}.00</span>
              <span className="text-gray-500">Monthly EMI</span> <span className="text-gray-300">: Rs. {loan.originalEmi.toLocaleString()}.00</span>
              <span className="text-gray-500">Overdue Period</span> <span className="text-gray-300">: {loan.overdueMonths} months</span>
            </div>
          </div>

          <div>
            <p className="font-bold text-gray-300 text-[10px] uppercase tracking-wide">FINANCIAL SITUATION:</p>
            <p className="mt-1">Due to genuine financial hardship, I am unable to continue servicing my loan as per the original schedule. My monthly income is Rs. 0.00 against total expenses of Rs. 0.00, leaving minimal surplus after essential needs.</p>
          </div>

          <div>
            <p className="font-bold text-gray-300 text-[10px] uppercase tracking-wide">SETTLEMENT PROPOSAL:</p>
            <p className="mt-1">I respectfully propose a One-Time Settlement at {loan.settlementRate}.0% of the outstanding amount:</p>
            <p className="font-bold text-emerald-400 ml-2 mt-1 font-mono">Settlement Amount: Rs. {targetSettlement.toLocaleString()}.00</p>
            <p className="mt-1.5">I can arrange this payment within 30–45 days of receiving written settlement confirmation.</p>
          </div>

          <div className="pt-2 text-gray-500 font-mono text-[11px]">
            <p>Yours sincerely,</p>
            <p className="text-red-400/90">[Your Full Name]</p>
            <p>[Loan Account Number]</p>
          </div>
        </div>
      </div>
    </div>
  );
}