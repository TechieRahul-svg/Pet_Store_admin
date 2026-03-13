import React, { useState } from 'react';

function AvailabilitySection({ availableSlots, updateSlots, bookings }) {
  const [capacity, setCapacity] = useState(15);
  const [capacityInput, setCapacityInput] = useState(15);

  const toggleSlot = (time) => {
    const newSlots = { ...availableSlots };
    newSlots[time] = !newSlots[time];
    updateSlots(newSlots);
  };

  const saveSlots = () => {
    alert('Slots updated successfully!');
  };

  const resetSlots = () => {
    const resetSlots = {};
    Object.keys(availableSlots).forEach(time => {
      resetSlots[time] = time !== '12:00';
    });
    updateSlots(resetSlots);
  };

  const updateCapacity = () => {
    setCapacity(capacityInput);
    alert('Capacity updated successfully!');
  };

  const generateSlots = () => {
    return Object.entries(availableSlots).map(([time, isAvailable]) => (
      <button
        key={time}
        onClick={() => toggleSlot(time)}
        style={{
          padding: '12px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '600',
          backgroundColor: isAvailable ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          transition: 'var(--transition)'
        }}
      >
        {time}
      </button>
    ));
  };

  const activeSlots = Object.values(availableSlots).filter(s => s).length;
  const activeBookings = bookings ? bookings.length : 0;

  return (
    <div className="animate-fade-in">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Slots Available</div>
          <div className="stat-value">{activeSlots}</div>
          <div style={{ color: 'var(--success)', fontSize: '0.8rem' }}>↑ Ready for booking</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Active Bookings</div>
          <div className="stat-value">{activeBookings}</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Confirmed appointments</div>
        </div>
        <div className="stat-card" style={{ borderLeft: '4px solid var(--primary)' }}>
          <div className="stat-label">Patient Capacity Limit</div>
          <div className="stat-value">{capacity}</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Max patients per day</div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '24px' }}>Manage Daily Slots</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '12px', marginBottom: '30px' }}>
          {generateSlots()}
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="btn btn-primary" onClick={saveSlots}>Update Available Slots</button>
          <button className="btn" style={{ background: 'rgba(255,255,255,0.1)' }} onClick={resetSlots}>Reset to Default</button>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '24px' }}>Practice Settings</h3>
        <div style={{ maxWidth: '400px' }}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>Maximum Patient Intake (Daily)</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <input 
                type="number" 
                value={capacityInput} 
                onChange={(e) => setCapacityInput(parseInt(e.target.value))}
                style={{ width: '100px' }} 
              />
              <button className="btn btn-primary" onClick={updateCapacity}>Save Capacity</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailabilitySection;
