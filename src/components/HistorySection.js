import React, { useState } from 'react';

function HistorySection() {
  const [history] = useState([
    { date: "12 Mar 2026", pet: "Rex (German Shepherd)", procedure: "Surgery - Fracture", outcome: "Successful", billing: "$450.00" },
    { date: "12 Mar 2026", pet: "Mimi (Persian Cat)", procedure: "Surgical Cleaning", outcome: "Successful", billing: "$120.00" },
    { date: "11 Mar 2026", pet: "Toby (Beagle)", procedure: "Blood Test & X-ray", outcome: "Report Sent", billing: "$210.00" },
    { date: "11 Mar 2026", pet: "Shadow (Black Lab)", procedure: "Emergency First Aid", outcome: "Recovered", billing: "$180.00" },
    { date: "10 Mar 2026", pet: "Goldie (Hamster)", procedure: "General Checkup", outcome: "Healthy", billing: "$60.00" }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredHistory = history.filter(item => 
    item.pet.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.procedure.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    alert('Exporting history as CSV...');
  };

  return (
    <div className="animate-fade-in">
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h3>Work History & Patient Logs</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              placeholder="Search history..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '8px 12px', fontSize: '0.9rem', width: '250px', borderRadius: '8px', border: '1px solid var(--glass-border)', backgroundColor: 'rgba(255,255,255,0.05)', color: 'white' }} 
            />
            <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }} onClick={handleExport}>Export CSV</button>
          </div>
        </div>

        <div className="table-container">
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '16px' }}>Date</th>
                <th style={{ padding: '16px' }}>Patient (Pet)</th>
                <th style={{ padding: '16px' }}>Procedure</th>
                <th style={{ padding: '16px' }}>Outcome</th>
                <th style={{ padding: '16px' }}>Treatment Cost</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td style={{ padding: '16px', color: 'var(--text-muted)' }}>{item.date}</td>
                  <td style={{ padding: '16px', fontWeight: '600' }}>{item.pet}</td>
                  <td style={{ padding: '16px' }}>{item.procedure}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ color: 'var(--success)', fontWeight: '600' }}>{item.outcome}</span>
                  </td>
                  <td style={{ padding: '16px', fontWeight: '700' }}>{item.billing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HistorySection;
