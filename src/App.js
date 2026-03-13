<<<<<<< HEAD
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [availableSlots, setAvailableSlots] = useState({
    '09:00': true,
    '10:00': true,
    '11:00': true,
    '12:00': false,
    '13:00': true,
    '14:00': true,
    '15:00': true,
    '16:00': true,
    '17:00': true,
    '18:00': true,
    '19:00': true,
    '20:00': true,
  });
  const [bookings, setBookings] = useState([]);

  const handleLogin = () => {
    setCurrentPage('doctor-dashboard');
  };

  const handleLogout = () => {
    setAvailableSlots({
      '09:00': true,
      '10:00': true,
      '11:00': true,
      '12:00': false,
      '13:00': true,
      '14:00': true,
      '15:00': true,
      '16:00': true,
      '17:00': true,
      '18:00': true,
      '19:00': true,
      '20:00': true,
    });
    setBookings([]);
    setCurrentPage('login');
  };

  const updateSlots = (newSlots) => {
    setAvailableSlots(newSlots);
  };

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
=======
import './App.css';
import { useMemo, useState } from 'react';
import { initialPets, initialRequests, initialHistory } from './constants/initialData';
import LoginPage from './components/LoginPage';
import Sidebar from './components/Sidebar';
import AvailablePets from './components/AvailablePets';
import AdoptionRequests from './components/AdoptionRequests';
import StoreHistory from './components/StoreHistory';
import ReplyModal from './components/ReplyModal';
import AddPetModal from './components/AddPetModal';
import EditPetModal from './components/EditPetModal';
import PetDetailsModal from './components/PetDetailsModal';
import ChatBot from './components/ChatBot';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeSection, setActiveSection] = useState('pets-section');
  const [pets, setPets] = useState(initialPets);
  const [requests, setRequests] = useState(initialRequests);
  const [history] = useState(initialHistory);
  const [selectedDays, setSelectedDays] = useState(30);
  const [activeRequestId, setActiveRequestId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [showAddPetForm, setShowAddPetForm] = useState(false);
  const [showEditPetForm, setShowEditPetForm] = useState(false);
  const [editingPetId, setEditingPetId] = useState(null);
  const [openPetMenuId, setOpenPetMenuId] = useState(null);
  const [selectedPetForDetails, setSelectedPetForDetails] = useState(null);
  const [formData, setFormData] = useState({ name: '', age: '', breed: '', type: '', img: '' });

  const activeRequest = useMemo(
    () => requests.find((request) => request.id === activeRequestId) ?? null,
    [activeRequestId, requests]
  );

  const handleLogin = (event) => {
    event.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      setIsAuthenticated(true);
      return;
    }

    window.alert('Invalid credentials! Use admin / admin');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsSidebarOpen(false);
    setCredentials({ username: '', password: '' });
    setActiveSection('pets-section');
    setActiveRequestId(null);
    setReplyText('');
  };

  const openReplyModal = (requestId) => {
    setActiveRequestId(requestId);
    setReplyText('');
  };

  const closeReplyModal = () => {
    setActiveRequestId(null);
    setReplyText('');
  };

  const openAddPetForm = () => {
    setShowAddPetForm(true);
    setFormData({ name: '', age: '', breed: '', type: '', img: '' });
  };

  const closeAddPetForm = () => {
    setShowAddPetForm(false);
    setFormData({ name: '', age: '', breed: '', type: '', img: '' });
  };

  const openEditPetForm = (pet) => {
    setEditingPetId(pet.id);
    setFormData({ 
      name: pet.name, 
      age: pet.age, 
      breed: pet.species, 
      type: '', 
      img: null 
    });
    setShowEditPetForm(true);
  };

  const closeEditPetForm = () => {
    setShowEditPetForm(false);
    setEditingPetId(null);
    setFormData({ name: '', age: '', breed: '', type: '', img: '' });
  };

  const handleDeletePet = (petId) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      setPets((currentPets) => currentPets.filter((pet) => pet.id !== petId));
      setOpenPetMenuId(null);
      window.alert('Pet has been deleted successfully!');
    }
  };

  const handleChangeStatus = (petId) => {
    const pet = pets.find((p) => p.id === petId);
    const newStatus = pet.status === 'available' ? 'pending' : 'available';
    setPets((currentPets) =>
      currentPets.map((p) =>
        p.id === petId ? { ...p, status: newStatus } : p
      )
    );
    setOpenPetMenuId(null);
    window.alert(`Pet status changed to ${newStatus}!`);
  };

  const openPetDetailsModal = (pet) => {
    setSelectedPetForDetails(pet);
    setOpenPetMenuId(null);
  };

  const closePetDetailsModal = () => {
    setSelectedPetForDetails(null);
  };

  const handleFormInputChange = (e) => {
    const { name, type, value, files } = e.target;
    if (type === 'file') {
      setFormData((current) => ({ ...current, [name]: files[0] || null }));
    } else {
      setFormData((current) => ({ ...current, [name]: value }));
    }
  };

  const handleAddPet = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.age.trim() || !formData.breed.trim() || !formData.type || !formData.img) {
      window.alert('Please fill in all fields');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const newPet = {
        id: Math.max(...pets.map(p => p.id), 0) + 1,
        name: formData.name.trim(),
        species: formData.breed.trim(),
        age: formData.age.trim(),
        type: formData.type,
        status: 'available',
        img: event.target.result,
      };

      setPets((currentPets) => [...currentPets, newPet]);
      window.alert(`Pet "${formData.name}" has been added successfully!`);
      closeAddPetForm();
    };

    reader.readAsDataURL(formData.img);
  };

  const handleEditPet = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.age.trim() || !formData.breed.trim()) {
      window.alert('Please fill in all fields');
      return;
    }

    const updatedPets = pets.map((pet) =>
      pet.id === editingPetId
        ? {
            ...pet,
            name: formData.name.trim(),
            species: formData.breed.trim(),
            age: formData.age.trim(),
          }
        : pet
    );

    setPets(updatedPets);
    window.alert(`Pet "${formData.name}" has been updated successfully!`);
    closeEditPetForm();
  };

  const sendReply = () => {
    if (!replyText.trim() || !activeRequestId) {
      return;
    }

    setRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === activeRequestId ? { ...request, status: 'Replied' } : request
      )
    );
    window.alert('Reply sent successfully to the applicant!');
    closeReplyModal();
>>>>>>> 0ed70e0f007f3c3788304c8a51869c012c88de2e
  };

  return (
    <>
<<<<<<< HEAD
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
      {currentPage === 'doctor-dashboard' && (
        <DashboardPage 
          onLogout={handleLogout} 
          availableSlots={availableSlots}
          updateSlots={updateSlots}
          bookings={bookings}
          addBooking={addBooking}
        />
      )}
=======
      {!isAuthenticated ? (
        <LoginPage credentials={credentials} setCredentials={setCredentials} handleLogin={handleLogin} />
      ) : (
        <div id="dashboard" className="fade-in dashboard-visible">
          <button
            type="button"
            className="hamburger-menu"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <i className="fas fa-bars" />
          </button>
          <Sidebar
            isOpen={isSidebarOpen}
            closeSidebar={() => setIsSidebarOpen(false)}
            activeSection={activeSection}
            setActiveSection={(section) => {
              setActiveSection(section);
              setIsSidebarOpen(false);
            }}
            handleLogout={handleLogout}
          />

          <main className="main-content">
            {activeSection === 'pets-section' && (
              <AvailablePets
                pets={pets}
                openAddPetForm={openAddPetForm}
                openEditPetForm={openEditPetForm}
                openPetMenuId={openPetMenuId}
                setOpenPetMenuId={setOpenPetMenuId}
                handleChangeStatus={handleChangeStatus}
                handleDeletePet={handleDeletePet}
                openPetDetailsModal={openPetDetailsModal}
              />
            )}

            {activeSection === 'requests-section' && (
              <AdoptionRequests requests={requests} openReplyModal={openReplyModal} />
            )}

            {activeSection === 'history-section' && (
              <StoreHistory history={history} selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
            )}
          </main>
        </div>
      )}

      <ReplyModal
        activeRequest={activeRequest}
        replyText={replyText}
        setReplyText={setReplyText}
        sendReply={sendReply}
        closeReplyModal={closeReplyModal}
      />

      <AddPetModal
        formData={formData}
        handleFormInputChange={handleFormInputChange}
        handleAddPet={handleAddPet}
        closeAddPetForm={closeAddPetForm}
        showAddPetForm={showAddPetForm}
      />

      <EditPetModal
        formData={formData}
        handleFormInputChange={handleFormInputChange}
        handleEditPet={handleEditPet}
        closeEditPetForm={closeEditPetForm}
        showEditPetForm={showEditPetForm}
      />

      <PetDetailsModal
        selectedPetForDetails={selectedPetForDetails}
        closePetDetailsModal={closePetDetailsModal}
      />

      <ChatBot />
>>>>>>> 0ed70e0f007f3c3788304c8a51869c012c88de2e
    </>
  );
}

export default App;
