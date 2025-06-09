import React from 'react';
import Header from '../components/Header';
import MapView from '../components/MapView';
import AppointmentDetailCard from '../components/AppointmentDetailCard';
import ActionButtons from '../components/ActionButtons';

export default function Navigation() {
  return (
    <div className="p-4">
      <Header title="Navigation" />
      <MapView />
      <AppointmentDetailCard heading="Breakdown Details">Location: Main Street</AppointmentDetailCard>
      <ActionButtons onAccept={() => alert('Arrived')} onReject={() => alert('Cancelled')} />
    </div>
  );
}