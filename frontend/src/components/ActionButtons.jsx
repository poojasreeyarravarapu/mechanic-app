import React from 'react';

export default function ActionButtons({ onAccept, onReject }) {
  return (
    <div className="flex gap-4">
      <button onClick={onAccept} className="bg-green-600 text-white px-4 py-2 rounded">Accept</button>
      <button onClick={onReject} className="bg-red-600 text-white px-4 py-2 rounded">Reject</button>
    </div>
  );
}