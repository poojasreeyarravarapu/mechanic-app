import React from 'react';

export default function StatusBadge({ status }) {
  const color = status === 'Accepted' ? 'green' : status === 'Pending' ? 'yellow' : 'red';
  return <span className={`text-${color}-600 font-bold`}>{status}</span>;
}
