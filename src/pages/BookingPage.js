import React, { useState } from 'react';

function BookingPage({ onLogout, availableSlots, onBook, bookings }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('John Smith');
  const [reason, setReason] = useState('General Checkup');
  const [showForm, setShowForm] = useState(false);

  const handleSlotClick = (time) => {
    setSelectedSlot(time);
    setShowForm(true);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!petName.trim()) {
      alert('Please enter your pet\'s name');
      return;
    }

    const booking = {
      petName,
      ownerName,
      time: selectedSlot,
      reason,
      bookedAt: new Date().toLocaleString()
    };

    onBook(booking);
    alert(`Successfully booked appointment at ${selectedSlot}!`);
    setPetName('');
    setSelectedSlot(null);
    setShowForm(false);
  };

  const availableCount = Object.values(availableSlots).filter(s => s).length;
  const bookedCount = bookings.length;

  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(circle at bottom right, #111827, #0f172a)' }}>
      {/* Header */}
      <div style={{
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--glass-border)',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="var(--primary)" strokeWidth="2"/>
            <path d="M12 8V16M8 12H16" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-light)' }}>VETDOCTOR</span>
        </div>
        <button
          onClick={onLogout}
          style={{
            padding: '10px 20px',
            background: 'rgba(239, 68, 68, 0.1)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--danger)',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'var(--transition)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--danger)';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
            e.currentTarget.style.color = 'var(--danger)';
          }}
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Stats */}
        <div className="stats-grid" style={{ marginBottom: '40px' }}>
          <div className="stat-card">
            <div className="stat-label">Available Slots</div>
            <div className="stat-value">{availableCount}</div>
            <div style={{ color: 'var(--success)', fontSize: '0.8rem' }}>Book now</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Your Bookings</div>
            <div className="stat-value">{bookedCount}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Confirmed appointments</div>
          </div>
          <div className="stat-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <div className="stat-label">Veterinarian</div>
            <div className="stat-value">Dr. Sarah</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Available today</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* Available Slots */}
          <div className="card">
            <h3 style={{ marginBottom: '24px' }}>Available Time Slots</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              {Object.entries(availableSlots).map(([time, isAvailable]) => (
                <button
                  key={time}
                  onClick={() => isAvailable && handleSlotClick(time)}
                  disabled={!isAvailable}
                  style={{
                    padding: '16px',
                    borderRadius: '8px',
                    border: selectedSlot === time ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                    background: isAvailable
                      ? selectedSlot === time
                        ? 'rgba(45, 90, 39, 0.3)'
                        : 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.3)',
                    color: isAvailable ? 'white' : 'var(--text-muted)',
                    cursor: isAvailable ? 'pointer' : 'not-allowed',
                    fontWeight: '600',
                    transition: 'var(--transition)',
                    opacity: isAvailable ? 1 : 0.5
                  }}
                >
                  {time}
                  {!isAvailable && <span style={{ fontSize: '0.7rem', display: 'block' }}>Unavailable</span>}
                </button>
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {availableCount} slots available today
            </p>
          </div>

          {/* Booking Form */}
          <div className="card">
            <h3 style={{ marginBottom: '24px' }}>Book Appointment</h3>
            {showForm && selectedSlot ? (
              <form onSubmit={handleBooking}>
                <div className="form-group">
                  <label>Pet Name *</label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g., Buddy, Luna, Max"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Owner Name</label>
                  <input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label>Reason for Visit</label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '8px',
                      color: 'white',
                      fontFamily: 'var(--font-family)',
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    <option value="General Checkup">General Checkup</option>
                    <option value="Vaccination">Vaccination</option>
                    <option value="Dental Cleaning">Dental Cleaning</option>
                    <option value="Surgery">Surgery</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Follow-up">Follow-up</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Selected Time</label>
                  <div style={{
                    padding: '12px 16px',
                    background: 'rgba(45, 90, 39, 0.2)',
                    border: '1px solid var(--primary)',
                    borderRadius: '8px',
                    color: 'white',
                    fontWeight: '600'
                  }}>
                    {selectedSlot}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                    Confirm Booking
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn"
                    style={{ flex: 1, background: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-muted)' }}>
                <p>Select a time slot to book an appointment</p>
              </div>
            )}
          </div>
        </div>

        {/* Booking History */}
        {bookings.length > 0 && (
          <div className="card" style={{ marginTop: '30px' }}>
            <h3 style={{ marginBottom: '24px' }}>Your Bookings</h3>
            <div className="table-container">
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '16px' }}>Pet Name</th>
                    <th style={{ padding: '16px' }}>Owner</th>
                    <th style={{ padding: '16px' }}>Time</th>
                    <th style={{ padding: '16px' }}>Reason</th>
                    <th style={{ padding: '16px' }}>Booked At</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                      <td style={{ padding: '16px', fontWeight: '600' }}>{booking.petName}</td>
                      <td style={{ padding: '16px' }}>{booking.ownerName}</td>
                      <td style={{ padding: '16px' }}>
                        <span className="badge-time">{booking.time}</span>
                      </td>
                      <td style={{ padding: '16px' }}>{booking.reason}</td>
                      <td style={{ padding: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {booking.bookedAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingPage;
