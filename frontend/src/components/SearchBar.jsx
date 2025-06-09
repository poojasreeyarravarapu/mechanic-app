import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search requests..."
      className="w-full p-2 border rounded mb-4"
    />
  );
}
