import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import ServiceCard from '../components/ServiceCard';

export default function Dashboard() {
  return (
    <div className="p-4 pb-16">
      <Header title="Mechanic App" />
      <ServiceCard title="Ongoing Services" onClick={() => alert('Navigate to ongoing')} />
      <ServiceCard title="New Requests" onClick={() => alert('Navigate to new requests')} />
      <ServiceCard title="Quick Actions" onClick={() => alert('Navigate to actions')} />
      <BottomNav />
    </div>
  );
}