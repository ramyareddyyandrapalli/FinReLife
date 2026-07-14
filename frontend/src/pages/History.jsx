import React from 'react';

export default function History() {
  const historyData = [
    { id: 'LOG-883', type: 'Validation Notice Compiled', target: 'KISHT', date: 'July 13, 2026', state: 'Dispatched' },
    { id: 'LOG-881', type: 'Settlement Threshold Forecast', target: 'Calculated 60%', date: 'July 13, 2026', state: 'Computed' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
          <span>📜</span> System Historic Logs
        </h1>
        <p className="text-xs text-gray-500 mt-0.5">Review previous negotiation outputs, letter creations, and strategy execution timestamps.</p>
      </div>

      <div className="bg-[#0b0e14] border border-gray-900/80 rounded-xl overflow-hidden">
        <table className="w-full text-left text-xs text-gray-400">
          <thead className="bg-gray-950/40 text-gray-400 text-[10px] uppercase tracking-wider font-bold border-b border-gray-900/60">
            <tr>
              <th className="px-6 py-3.5">Log ID</th>
              <th className="px-6 py-3.5">Action Type</th>
              <th className="px-6 py-3.5">Target Lender / Context</th>
              <th className="px-6 py-3.5">Execution Date</th>
              <th className="px-6 py-3.5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-900/40">
            {historyData.map((log, index) => (
              <tr key={index} className="hover:bg-gray-900/20 text-gray-300 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-blue-400">{log.id}</td>
                <td className="px-6 py-4 font-medium text-white">{log.type}</td>
                <td className="px-6 py-4 font-mono text-[11px] text-gray-400">{log.target}</td>
                <td className="px-6 py-4 text-gray-500">{log.date}</td>
                <td className="px-6 py-4">
                  <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20 font-medium">
                    {log.state}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}