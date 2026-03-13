import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AvailabilitySection from '../components/AvailabilitySection';
import AppointmentsSection from '../components/AppointmentsSection';
import HistorySection from '../components/HistorySection';
import ChatBot from '../components/ChatBot';

function DashboardPage({ onLogout, availableSlots, updateSlots, bookings, addBooking }) {
  const [currentPage, setCurrentPage] = useState('availability');

  const renderContent = () => {
    switch (currentPage) {
      case 'availability':
        return <AvailabilitySection availableSlots={availableSlots} updateSlots={updateSlots} bookings={bookings} />;
      case 'requests':
        return <AppointmentsSection bookings={bookings} />;
      case 'history':
        return <HistorySection />;
      default:
        return <AvailabilitySection availableSlots={availableSlots} updateSlots={updateSlots} bookings={bookings} />;
    }
  };

  const getPageTitle = () => {
    const titles = {
      'availability': 'My Availability',
      'requests': 'Appoint Requests',
      'history': 'Work History'
    };
    return titles[currentPage] || 'My Availability';
  };

  return (
    <div className="dashboard-container">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} onLogout={onLogout} />
      <main className="main-content">
        <Header pageTitle={getPageTitle()} />
        <div className="content-body">
          {renderContent()}
        </div>
      </main>
      <ChatBot />
    </div>
  );
}

export default DashboardPage;
