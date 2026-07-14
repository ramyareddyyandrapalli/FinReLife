import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; 
import FinancialHealth from './pages/FinancialHealth';
import Settlement from './pages/Settlement';
import Negotiation from './pages/Negotiation';
import Rights from './pages/Rights';
import History from './pages/History'; // ✅ Fixed: Added missing page import

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  // Centralized real-time states
  const [financials, setFinancials] = useState({
    monthlyIncome: 0,
    monthlyExpenses: 0,
    monthlySurplus: -8900,
    lumpSum: 0,
    emiToIncome: 0.0,
    debtToIncome: 0.0,
    stressLevel: 'LOW'
  });

  const [activeLoan, setActiveLoan] = useState({
    lender: 'KISHT',
    outstanding: 80000,
    originalEmi: 8900,
    overdueMonths: 3,
    settlementRate: 60,
    riskLevel: 'Medium Risk'
  });

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-[#07090e] text-white selection:bg-blue-600/30">
        <Sidebar onLogout={() => setIsAuthenticated(false)} />
        <div className="flex-1 flex flex-col min-w-0">
          <Navbar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route 
                path="/financial-health" 
                element={<FinancialHealth financials={financials} setFinancials={setFinancials} />} 
              />
              <Route 
                path="/settlement" 
                element={<Settlement financials={financials} loan={activeLoan} />} 
              />
              <Route 
                path="/negotiation" 
                element={<Negotiation financials={financials} loan={activeLoan} />} 
              />
              <Route path="/rights" element={<Rights />} />
              <Route path="/history" element={<History />} /> {/* ✅ Fixed: Proper JSX layout routing */}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}