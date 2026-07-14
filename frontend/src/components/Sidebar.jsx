import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ onLogout }) {
  // Change your links array inside Sidebar.jsx to look like this:
const links = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Financial Health', path: '/financial-health', icon: '💚' },
  { name: 'Settlement Predictor', path: '/settlement', icon: '🔮' },
  { name: 'Negotiation Email', path: '/negotiation', icon: '✉️' },
  { name: 'Know Your Rights', path: '/rights', icon: '🛡️' },
  { name: 'History', path: '/history', icon: '📜' }, // ✅ Disabled marker removed!
];

  return (
    <aside className="w-64 bg-[#0a0d14] border-r border-gray-900/80 flex flex-col hidden md:flex h-screen sticky top-0">
      <div className="p-6 border-b border-gray-900/60 flex items-center gap-2">
        <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center text-xs text-black font-bold">FA</div>
        <span className="font-bold tracking-tight text-white text-base">FinRelief AI</span>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        <p className="text-[10px] uppercase tracking-wider text-gray-600 font-bold px-4 mb-2">Navigation</p>
        {links.map((link) => (
          link.disabled ? (
            <div key={link.name} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-medium text-gray-700 cursor-not-allowed opacity-40">
              <span className="text-sm">{link.icon}</span>
              {link.name}
            </div>
          ) : (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  isActive 
                    ? 'bg-blue-600/15 border-l-2 border-blue-500 text-blue-400' 
                    : 'text-gray-400 hover:bg-gray-900/50 hover:text-white'
                }`
              }
            >
              <span className="text-sm">{link.icon}</span>
              {link.name}
            </NavLink>
          )
        ))}
      </nav>

      <div className="p-4 border-t border-gray-900/60">
        <button onClick={onLogout} className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs text-gray-500 hover:text-red-400 transition-colors">
          🚪 <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}