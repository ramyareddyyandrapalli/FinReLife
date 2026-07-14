import React from 'react';

export default function Navbar() {
  return (
    <header className="h-14 border-b border-gray-900/60 bg-[#07090e] px-6 flex items-center justify-between">
      <div className="text-xs font-medium text-gray-500">
        Workspace / <span className="text-gray-300">Active Pipeline</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2.5 py-0.5 rounded-full border border-blue-500/20 font-medium font-mono">
          V4-ENGINE-CONNECTED
        </span>
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-[11px] font-bold text-white shadow-md">
          YA
        </div>
      </div>
    </header>
  );
}