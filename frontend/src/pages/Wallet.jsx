import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const Wallet = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Wallet" />
      <div className="p-6 max-w-xl mx-auto">
        <section className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">Wallet Details</h2>
          <p><strong>Balance:</strong> $1,250.00</p>
          <p><strong>Last transaction:</strong> - $50.00 on 2025-06-05</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Funds
          </button>
        </section>
      </div>

        <BottomNav />
    </div>
  );
};

export default Wallet;
