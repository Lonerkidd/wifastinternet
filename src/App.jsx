import React from 'react';
import Header from './components/header';
import Plans from './components/plans';
import VoucherSection from './components/voucher';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 flex flex-col items-center">
      <Header />
      <Plans />
      <VoucherSection />
    </div>
  );
}

export default App;
