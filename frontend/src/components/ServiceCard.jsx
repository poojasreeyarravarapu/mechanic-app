import React from 'react';

export default function ServiceCard({ title, onClick }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <button onClick={onClick} className="bg-blue-600 text-white px-4 py-2 rounded">View Details</button>
    </div>
  );
}