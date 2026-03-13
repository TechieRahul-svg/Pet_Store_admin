import React from 'react';

const AdoptionRequests = ({ requests, openReplyModal }) => {
  return (
    <section id="requests-section" className="dashboard-section">
      <div className="section-header fade-in">
        <div>
          <h1>Adoption Requests</h1>
          <p className="section-subtitle">
            Review and respond to new requests from potential owners
          </p>
        </div>
      </div>
      <div className="glass table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pet</th>
              <th>Applicant</th>
              <th>Date Received</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="requests-container">
            {requests.map((request) => (
              <tr key={request.id}>
                <td>
                  <div className="strong-text">{request.pet}</div>
                  <div className="small-muted">{request.id}</div>
                </td>
                <td>
                  <div>{request.applicant}</div>
                  <div className="small-primary">{request.email}</div>
                </td>
                <td>{request.date}</td>
                <td>
                  <span className="pet-status status-chip">{request.status}</span>
                </td>
                <td>
                  <div className="table-actions">
                    <button
                      type="button"
                      className="btn-action btn-reply"
                      onClick={() => openReplyModal(request.id)}
                    >
                      Reply
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdoptionRequests;
