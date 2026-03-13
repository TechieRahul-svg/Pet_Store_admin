import React from 'react';

const PetDetailsModal = ({ selectedPetForDetails, closePetDetailsModal }) => {
  if (!selectedPetForDetails) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          closePetDetailsModal();
        }
      }}
    >
      <div className="modal-content glass fade-in">
        <div className="modal-header">
          <h3>Pet Details</h3>
          <p className="reply-target">Full information about {selectedPetForDetails.name}</p>
        </div>
        <div className="modal-body pet-details-body">
          <div className="pet-details-image">
            <img src={selectedPetForDetails.img} alt={selectedPetForDetails.name} />
          </div>
          <div className="pet-details-info">
            <div className="detail-row">
              <label>Name:</label>
              <span>{selectedPetForDetails.name}</span>
            </div>
            <div className="detail-row">
              <label>Species/Breed:</label>
              <span>{selectedPetForDetails.species}</span>
            </div>
            <div className="detail-row">
              <label>Age:</label>
              <span>{selectedPetForDetails.age}</span>
            </div>
            <div className="detail-row">
              <label>Status:</label>
              <span className={`pet-status status-${selectedPetForDetails.status}`}>
                {selectedPetForDetails.status.toUpperCase()}
              </span>
            </div>
            {selectedPetForDetails.type && (
              <div className="detail-row">
                <label>Type:</label>
                <span>{selectedPetForDetails.type}</span>
              </div>
            )}
          </div>
          <div className="modal-actions">
            <button
              type="button"
              className="btn-action btn-view modal-cancel"
              onClick={closePetDetailsModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsModal;
