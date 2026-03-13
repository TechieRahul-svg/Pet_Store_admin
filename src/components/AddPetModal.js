import React from 'react';

const AddPetModal = ({ formData, handleFormInputChange, handleAddPet, closeAddPetForm, showAddPetForm }) => {
  if (!showAddPetForm) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          closeAddPetForm();
        }
      }}
    >
      <div className="modal-content glass fade-in">
        <div className="modal-header">
          <h3>Add New Pet</h3>
          <p className="reply-target">Fill in the details below to add a new pet</p>
        </div>
        <div className="modal-body">
          <form onSubmit={handleAddPet}>
            <div className="form-group">
              <label htmlFor="pet-name">Pet Name</label>
              <input
                type="text"
                id="pet-name"
                name="name"
                placeholder="Enter pet name"
                value={formData.name}
                onChange={handleFormInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pet-age">Age</label>
              <input
                type="text"
                id="pet-age"
                name="age"
                placeholder="e.g., 3 months, 1 year"
                value={formData.age}
                onChange={handleFormInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pet-breed">Breed</label>
              <input
                type="text"
                id="pet-breed"
                name="breed"
                placeholder="e.g., Golden Retriever"
                value={formData.breed}
                onChange={handleFormInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pet-type">Type</label>
              <select
                id="pet-type"
                name="type"
                value={formData.type}
                onChange={handleFormInputChange}
                required
              >
                <option value="">-- Select Pet Type --</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Bird">Bird</option>
                <option value="Fish">Fish</option>
                <option value="Hamster">Hamster</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="pet-image">Pet Image</label>
              <input
                type="file"
                id="pet-image"
                name="img"
                accept=".png,.jpg,.jpeg"
                onChange={handleFormInputChange}
                required
              />
            </div>
            <div className="modal-actions">
              <button type="submit" className="btn-primary">
                Add Pet
              </button>
              <button
                type="button"
                className="btn-action btn-view modal-cancel"
                onClick={closeAddPetForm}
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

export default AddPetModal;
