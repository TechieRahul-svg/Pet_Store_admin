import React from 'react';

const EditPetModal = ({ formData, handleFormInputChange, handleEditPet, closeEditPetForm, showEditPetForm }) => {
  if (!showEditPetForm) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          closeEditPetForm();
        }
      }}
    >
      <div className="modal-content glass fade-in">
        <div className="modal-header">
          <h3>Edit Pet Details</h3>
          <p className="reply-target">Update the pet information below</p>
        </div>
        <div className="modal-body">
          <form onSubmit={handleEditPet}>
            <div className="form-group">
              <label htmlFor="edit-pet-name">Pet Name</label>
              <input
                type="text"
                id="edit-pet-name"
                name="name"
                placeholder="Enter pet name"
                value={formData.name}
                onChange={handleFormInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-pet-age">Age</label>
              <input
                type="text"
                id="edit-pet-age"
                name="age"
                placeholder="e.g., 3 months, 1 year"
                value={formData.age}
                onChange={handleFormInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-pet-breed">Breed</label>
              <input
                type="text"
                id="edit-pet-breed"
                name="breed"
                placeholder="e.g., Golden Retriever"
                value={formData.breed}
                onChange={handleFormInputChange}
                required
              />
            </div>
            <div className="modal-actions">
              <button type="submit" className="btn-primary">
                Save Changes
              </button>
              <button
                type="button"
                className="btn-action btn-view modal-cancel"
                onClick={closeEditPetForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPetModal;
