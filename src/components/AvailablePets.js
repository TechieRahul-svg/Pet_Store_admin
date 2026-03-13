import React from 'react';

const AvailablePets = ({
  pets,
  openAddPetForm,
  openEditPetForm,
  openPetMenuId,
  setOpenPetMenuId,
  handleChangeStatus,
  handleDeletePet,
  openPetDetailsModal,
}) => {
  return (
    <section id="pets-section" className="dashboard-section">
      <div className="section-header fade-in">
        <div>
          <h1>Available Pets</h1>
          <p className="section-subtitle">
            Manage and monitor animals currently in the store
          </p>
        </div>
        <button className="btn-primary add-pet-btn" onClick={openAddPetForm}>
          + Add New Pet
        </button>
      </div>
      <div className="pet-grid" id="pet-container">
        {pets.map((pet) => (
          <div className="pet-card glass slide-in" key={pet.id}>
            <img src={pet.img} alt={pet.name} className="pet-img" />
            <div className="pet-info">
              <span className={`pet-status status-${pet.status}`}>
                {pet.status.toUpperCase()}
              </span>
              <h3 className="pet-name">{pet.name}</h3>
              <p className="pet-meta">
                {pet.species} • {pet.age}
              </p>
              <div className="pet-actions">
                <button
                  type="button"
                  className="btn-action btn-view pet-action-grow"
                  onClick={() => openEditPetForm(pet)}
                >
                  Edit
                </button>
                <div className="pet-menu-wrapper">
                  <button
                    type="button"
                    className="btn-action btn-view pet-action-grow"
                    onClick={() => setOpenPetMenuId(openPetMenuId === pet.id ? null : pet.id)}
                  >
                    <i className="fas fa-ellipsis-h" />
                  </button>
                  {openPetMenuId === pet.id && (
                    <div className="pet-dropdown-menu">
                      <button
                        type="button"
                        className="dropdown-item"
                        onClick={() => handleChangeStatus(pet.id)}
                      >
                        <i className="fas fa-redo" /> Change Status
                      </button>
                      <button
                        type="button"
                        className="dropdown-item"
                        onClick={() => openPetDetailsModal(pet)}
                      >
                        <i className="fas fa-info-circle" /> View Full Details
                      </button>
                      <button
                        type="button"
                        className="dropdown-item dropdown-delete"
                        onClick={() => handleDeletePet(pet.id)}
                      >
                        <i className="fas fa-trash" /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailablePets;
