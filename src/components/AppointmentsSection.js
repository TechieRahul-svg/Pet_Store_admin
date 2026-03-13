import React, { useState } from 'react';

function AppointmentsSection({ bookings }) {
  const [requests] = useState([
    { id: 1, pet: "Buddy (Golden Retriever)", owner: "James Miller", slot: "10:00 AM", reason: "Annual Vaccination", status: "Approved" },
    { id: 2, pet: "Luna (Cat)", owner: "Emma Wilson", slot: "11:30 AM", reason: "Injury Checkup", status: "Denied" },
    { id: 3, pet: "Max (Husky)", owner: "Robert Brown", slot: "02:00 PM", reason: "Skin Allergy", status: "Approved" },
    { id: 4, pet: "Bella (Labrador)", owner: "Alice Den", slot: "04:30 PM", reason: "Dental Cleaning", status: "Denied" }
  ]);

  const allAppointments = [
    ...requests,
    ...bookings.map((booking, idx) => ({
      id: 100 + idx,
      pet: booking.petName,
      owner: booking.ownerName,
      slot: booking.time,
      reason: booking.reason,
      status: 'Booked'
    }))
  ];

  return (
    <div className="appointments-container">

      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="appointments-content animate-fade-in">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h3>Incoming Appointment Requests</h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Total: {allAppointments.length} | Booked: {bookings.length}
            </div>
          </div>
          
          <div className="table-container">
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '16px' }}>Pet & Owner</th>
                  <th style={{ padding: '16px' }}>Time Slot</th>
                  <th style={{ padding: '16px' }}>Reason</th>
                  <th style={{ padding: '16px' }}>Status</th>
                </tr>
              </thead>

              <tbody>
                {allAppointments.map(req => (
                  <tr key={req.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontWeight: '600' }}>{req.pet}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{req.owner}</div>
                    </td>

                    <td style={{ padding: '16px' }}>
                      <span className="badge-time">{req.slot}</span>
                    </td>

                    <td style={{ padding: '16px' }}>{req.reason}</td>

                    <td style={{ padding: '16px' }}>
                      <span style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        backgroundColor: req.status === 'Approved'
                          ? 'rgba(16,185,129,0.1)'
                          : req.status === 'Denied'
                          ? 'rgba(239,68,68,0.1)'
                          : 'rgba(243,156,18,0.1)',
                        color: req.status === 'Approved'
                          ? 'var(--success)'
                          : req.status === 'Denied'
                          ? 'var(--danger)'
                          : 'var(--accent)'
                      }}>
                        {req.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentsSection;