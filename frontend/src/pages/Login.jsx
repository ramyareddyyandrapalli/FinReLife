import React from 'react';

export default function Login({ onLogin }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#07090e]">
      <div className="bg-[#0b0e14] border border-gray-900 p-8 rounded-2xl max-w-sm w-full text-center space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Welcome back</h2>
        <p className="text-xs text-gray-500">Sign in to your FinRelief AI workspace</p>
        <button onClick={onLogin} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-xs font-medium transition-colors">
          Launch Application Console →
        </button>
      </div>
    </div>
  );
}