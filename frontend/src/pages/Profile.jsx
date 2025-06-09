import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Profile" />
      <main className="p-6 max-w-xl mx-auto">
        <section className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">User Information</h2>
          <p><strong>Name:</strong> Jane Doe</p>
          <p><strong>Email:</strong> jane.doe@example.com</p>
          <p><strong>Member since:</strong> January 2022</p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
