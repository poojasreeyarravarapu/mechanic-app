import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CheckRequests from './pages/CheckRequests';
import MyAppointments from './pages/MyAppointments';
import Navigation from './pages/Navigation';
import ViewDetails from './pages/ViewDetails';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/requests" element={<CheckRequests />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/details" element={<ViewDetails />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
