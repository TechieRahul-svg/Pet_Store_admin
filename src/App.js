import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [availableSlots, setAvailableSlots] = useState({
    '09:00': true,
    '10:00': true,
    '11:00': true,
    '12:00': false,
    '13:00': true,
    '14:00': true,
    '15:00': true,
    '16:00': true,
    '17:00': true,
    '18:00': true,
    '19:00': true,
    '20:00': true,
  });
  const [bookings, setBookings] = useState([]);

  const handleLogin = () => {
    setCurrentPage('doctor-dashboard');
  };

  const handleLogout = () => {
    setAvailableSlots({
      '09:00': true,
      '10:00': true,
      '11:00': true,
      '12:00': false,
      '13:00': true,
      '14:00': true,
      '15:00': true,
      '16:00': true,
      '17:00': true,
      '18:00': true,
      '19:00': true,
      '20:00': true,
    });
    setBookings([]);
    setCurrentPage('login');
  };

  const updateSlots = (newSlots) => {
    setAvailableSlots(newSlots);
  };

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <>
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
      {currentPage === 'doctor-dashboard' && (
        <DashboardPage 
          onLogout={handleLogout} 
          availableSlots={availableSlots}
          updateSlots={updateSlots}
          bookings={bookings}
          addBooking={addBooking}
        />
      )}
    </>
  );
}

export default App;
