// src/components/VoucherSection.jsx
import React from 'react';

const VoucherSection = () => {
  return (
    <section className="bg-gray-100 p-4 rounded-lg mt-8 mx-auto w-full max-w-md text-center">
      <h2 className="text-xl font-semibold mb-4">Enter Your Phone Number</h2>
      <input
        type="text"
        placeholder="Phone Number"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button className="bg-blue-600 text-white p-2 rounded w-full font-bold">
        Pay Now
      </button>
      <div className="mt-6 p-4 bg-white border rounded">
        <p className="text-gray-500">Your Voucher:</p>
        <div className="text-blue-600 font-bold">[Voucher will appear here]</div>
      </div>
    </section>
  );
};

export default VoucherSection;
