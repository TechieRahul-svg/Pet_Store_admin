import React from 'react';

const StoreHistory = ({ history, selectedDays, setSelectedDays }) => {
  const dayOptions = [5, 6, 7, 8, 9, 10];

  return (
    <section id="history-section" className="dashboard-section">
      <div className="section-header fade-in">
        <div>
          <h1>Store History</h1>
          <p className="section-subtitle">
            Overview of past adoptions and legal records
          </p>
        </div>
        <div className="glass date-filter">
          <i className="fas fa-calendar-alt date-filter-icon" />
          <select 
            className="date-filter-select"
            value={selectedDays}
            onChange={(e) => setSelectedDays(Number(e.target.value))}
          >
            {dayOptions.map((day) => (
              <option key={day} value={day}>
                Last {day} Days
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="glass table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pet</th>
              <th>New Owner</th>
              <th>Completion Date</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody id="history-container">
            {history.map((item) => (
              <tr key={item.id}>
                <td className="strong-text">{item.pet}</td>
                <td>{item.owner}</td>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>
                  <span className="pet-status status-available">{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StoreHistory;
