import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function CheckRequests() {
  const [search, setSearch] = useState('');
  return (
    <div className="p-4">
      <Header title="Check Requests" />
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}