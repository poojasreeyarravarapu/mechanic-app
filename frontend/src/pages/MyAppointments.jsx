import React from 'react';
import Header from '../components/Header';
import AppointmentDetailCard from '../components/AppointmentDetailCard';
import ActionButtons from '../components/ActionButtons';
import BottomNav from '../components/BottomNav';

export default function MyAppointments() {
  return (
    <div className="p-4">
      <Header title="Service Request" />
      <AppointmentDetailCard heading="Customer Information">Name: John Doe</AppointmentDetailCard>
      <AppointmentDetailCard heading="Vehicle Details">Car: Honda Civic</AppointmentDetailCard>
      <AppointmentDetailCard heading="Service Details">Issue: Engine Failure</AppointmentDetailCard>
      <AppointmentDetailCard heading="Request Status">Status: <strong>Pending</strong></AppointmentDetailCard>
      <ActionButtons onAccept={() => alert('Accepted')} onReject={() => alert('Rejected')} />

      <BottomNav />
    </div>
  );
}