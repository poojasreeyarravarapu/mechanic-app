import React from 'react';
import Header from '../components/Header';
import AppointmentDetailCard from '../components/AppointmentDetailCard';
import ActionButtons from '../components/ActionButtons';

export default function ViewDetails() {
  return (
    <div className="p-4">
      <Header title="View Request Details" />
      <AppointmentDetailCard heading="Customer Information">Name: Jane Smith</AppointmentDetailCard>
      <AppointmentDetailCard heading="Vehicle Details">Car: Toyota Corolla</AppointmentDetailCard>
      <AppointmentDetailCard heading="Service Details">Issue: Flat Tire</AppointmentDetailCard>
      <AppointmentDetailCard heading="Request Status">Status: <strong>Pending</strong></AppointmentDetailCard>
      <ActionButtons onAccept={() => alert('Accepted')} onReject={() => alert('Rejected')} />
    </div>
  );
}
