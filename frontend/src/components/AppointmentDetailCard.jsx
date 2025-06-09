import React from 'react';

export default function AppointmentDetailCard({ heading, children }) {
  return (
    <div className="bg-gray-100 p-2 rounded-xl mb-4">
      <h3 className="font-bold mb-2">{heading}</h3>
      {children}
    </div>
  );
}