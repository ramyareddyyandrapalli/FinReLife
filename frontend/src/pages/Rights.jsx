import React from 'react';

export default function Rights() {
  const protections = [
    { title: 'No Harassment', desc: 'Recovery agents CANNOT call you before 7 AM or after 7 PM. Threats, abuse, or use of force is illegal under RBI guidelines.', icon: '🚫' },
    { title: 'Right to Statement', desc: 'You have the right to receive a full and detailed loan account statement at any time, free of charge.', icon: '📄' },
    { title: 'Settlement Negotiation', desc: 'You can negotiate a one-time settlement with your lender. Lenders are allowed to accept partial payments to close an NPA account.', icon: '🤝' },
    { title: 'Advance Notice Required', desc: 'Lenders must give you 60-day advance notice before classifying your account as NPA (Non-Performing Asset).', icon: '🔔' },
    { title: 'Grievance Redressal', desc: 'Every bank must have a Grievance Redressal Officer. You can escalate to RBI Banking Ombudsman if unresolved in 30 days.', icon: '⚖️' },
    { title: 'NOC After Settlement', desc: 'After full payment or settlement, you are legally entitled to a No-Objection Certificate (NOC) from the lender.', icon: '📜' },
    { title: 'Property Protection', desc: 'Lenders cannot seize property without following SARFAESI Act procedures. You have the right to challenge auction notices.', icon: '🏠' },
    { title: 'Privacy Rights', desc: 'Recovery agents cannot contact your family, employer, or neighbors to pressure you for repayment.', icon: '🔒' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
          <span>⚖️</span> Know Your Rights
        </h1>
        <p className="text-xs text-gray-500 mt-0.5">RBI guidelines and legal protections for Indian borrowers</p>
      </div>

      <div className="bg-[#0b0e14] border border-gray-900/80 p-5 rounded-xl">
        <h3 className="text-sm font-bold text-gray-200 flex items-center gap-2">
          You Have Rights as a Borrower 💪
        </h3>
        <p className="text-xs text-gray-400 max-w-4xl leading-relaxed mt-1.5">
          Under RBI's Fair Practices Code and the SARFAESI Act, lenders and recovery agents must follow strict rules. Knowing these rights protects you from illegal harassment and helps you negotiate from a position of strength.
        </p>
      </div>

      {/* 8-Card Protection Array */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {protections.map((item, idx) => (
          <div key={idx} className="bg-[#0b0e14] border border-gray-900/80 p-4 rounded-xl flex flex-col gap-3">
            <span className="text-sm p-1.5 bg-gray-950 w-fit rounded-lg border border-gray-800/80">{item.icon}</span>
            <div>
              <h4 className="text-xs font-bold text-gray-200">{item.title}</h4>
              <p className="text-[11px] text-gray-500 mt-1 leading-normal">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ombudsman Action Footer */}
      <div className="bg-[#0b0e14] border border-gray-900/80 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="text-xs font-mono">
          <p className="font-bold text-pink-500 flex items-center gap-1.5">📞 RBI Banking Ombudsman</p>
          <p className="text-gray-500 text-[11px] mt-0.5">Toll-free: 14448 • Website: cms.rbi.org.in</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg transition-colors">
          File Complaint —
        </button>
      </div>
    </div>
  );
}