# PetStore Admin Dashboard - Refactored Architecture

## Overview

The React application has been refactored to follow a modular, component-based architecture for better maintainability, scalability, and code organization.

## Project Structure

```
src/
├── components/                 # Feature-based components
│   ├── LoginPage.js           # Authentication page component
│   ├── Sidebar.js             # Navigation sidebar component
│   ├── AvailablePets.js       # Pet listing and management
│   ├── AdoptionRequests.js    # Adoption requests table
│   ├── StoreHistory.js        # Historical data display
│   ├── ReplyModal.js          # Reply to adoption requests
│   ├── AddPetModal.js         # Add new pet form
│   ├── EditPetModal.js        # Edit pet details form
│   └── PetDetailsModal.js     # Full pet information view
├── constants/
│   └── initialData.js         # Initial state data
├── App.js                     # Main application logic and state management
├── App.css                    # Global styles
└── index.js                   # Entry point
```

## Components Description

### 1. **LoginPage** (`components/LoginPage.js`)
- **Purpose**: Handles user authentication
- **Props**: 
  - `credentials`: User login credentials object
  - `setCredentials`: State setter for credentials
  - `handleLogin`: Login submission handler
- **Features**: Login form with validation

### 2. **Sidebar** (`components/Sidebar.js`)
- **Purpose**: Main navigation sidebar
- **Props**:
  - `activeSection`: Current active navigation section
  - `setActiveSection`: State setter for active section
  - `handleLogout`: Logout handler
- **Features**: Navigation links, user profile, logout button

### 3. **AvailablePets** (`components/AvailablePets.js`)
- **Purpose**: Display available pets in grid layout
- **Props**:
  - `pets`: Array of pet objects
  - `openAddPetForm`: Function to open add pet modal
  - `openEditPetForm`: Function to open edit pet modal
  - `openPetMenuId`: Currently open pet menu ID
  - `setOpenPetMenuId`: State setter for pet menu
  - `handleChangeStatus`: Toggle pet status function
  - `handleDeletePet`: Delete pet function
  - `openPetDetailsModal`: Open pet details function
- **Features**: Pet cards with action menu (Change Status, View Details, Delete)

### 4. **AdoptionRequests** (`components/AdoptionRequests.js`)
- **Purpose**: Display adoption requests in table format
- **Props**:
  - `requests`: Array of adoption request objects
  - `openReplyModal`: Function to open reply modal
- **Features**: Request table with reply action

### 5. **StoreHistory** (`components/StoreHistory.js`)
- **Purpose**: Display historical adoption/sale records
- **Props**:
  - `history`: Array of historical records
- **Features**: Historical data table with filtering

### 6. **ReplyModal** (`components/ReplyModal.js`)
- **Purpose**: Modal for replying to adoption requests
- **Props**:
  - `activeRequest`: Currently active request object
  - `replyText`: Reply message text
  - `setReplyText`: State setter for reply text
  - `sendReply`: Function to send reply
  - `closeReplyModal`: Function to close modal

### 7. **AddPetModal** (`components/AddPetModal.js`)
- **Purpose**: Modal form for adding new pets
- **Props**:
  - `formData`: Form input data object
  - `handleFormInputChange`: Form input change handler
  - `handleAddPet`: Form submission handler
  - `closeAddPetForm`: Function to close modal
  - `showAddPetForm`: Boolean to show/hide modal
- **Features**: Pet registration form with image upload

### 8. **EditPetModal** (`components/EditPetModal.js`)
- **Purpose**: Modal form for editing pet details
- **Props**:
  - `formData`: Form input data object
  - `handleFormInputChange`: Form input change handler
  - `handleEditPet`: Form submission handler
  - `closeEditPetForm`: Function to close modal
  - `showEditPetForm`: Boolean to show/hide modal
- **Features**: Pet information update form

### 9. **PetDetailsModal** (`components/PetDetailsModal.js`)
- **Purpose**: Display full pet information
- **Props**:
  - `selectedPetForDetails`: Pet object to display
  - `closePetDetailsModal`: Function to close modal
- **Features**: Read-only pet details display

## Constants

### `constants/initialData.js`
Centralized location for initial state data:
- `initialPets`: Array of 6 sample pets
- `initialRequests`: Array of adoption requests
- `initialHistory`: Array of historical records

## State Management (App.js)

The main App component manages all application state and logic:

### State Hooks
```javascript
- isAuthenticated: User authentication status
- credentials: Login credentials
- activeSection: Current active dashboard section
- pets: List of available pets
- requests: List of adoption requests
- activeRequestId: Currently selected request for reply
- replyText: Reply message text
- showAddPetForm: Add pet modal visibility
- showEditPetForm: Edit pet modal visibility
- editingPetId: ID of pet being edited
- openPetMenuId: ID of pet with open action menu
- selectedPetForDetails: Pet selected for details view
- formData: Form input data
- history: Historical records
```

### Key Functions
- **Authentication**: `handleLogin()`, `handleLogout()`
- **Pet Management**: `handleAddPet()`, `handleEditPet()`, `handleDeletePet()`, `handleChangeStatus()`
- **Modal Management**: Open/close functions for each modal
- **Form Handling**: `handleFormInputChange()`
- **Request Management**: `sendReply()`, `openReplyModal()`

## Benefits of This Architecture

1. **Modularity**: Each feature is isolated in its own component
2. **Reusability**: Components can be easily reused in other projects
3. **Maintainability**: Changes to one feature don't affect others
4. **Testing**: Individual components can be tested independently
5. **Scalability**: Easy to add new features without cluttering existing code
6. **Code Organization**: Clear separation of concerns
7. **Team Collaboration**: Multiple developers can work on different components simultaneously

## Component Communication Flow

```
App (State Management)
  ├── LoginPage
  ├── Sidebar
  ├── Main Content
  │   ├── AvailablePets
  │   ├── AdoptionRequests
  │   └── StoreHistory
  └── Modals
      ├── ReplyModal
      ├── AddPetModal
      ├── EditPetModal
      └── PetDetailsModal
```

All state and logic remain centralized in `App.js`, with components receiving data and callbacks as props.

## Future Improvements

1. **Context API**: Use Context API to avoid prop drilling
2. **Custom Hooks**: Extract common logic into custom hooks
3. **API Integration**: Replace initial data with API calls
4. **Redux**: Consider Redux for complex state management
5. **Styling**: Move CSS to CSS Modules or Styled Components
6. **Testing**: Add unit tests for each component
7. **Error Handling**: Implement comprehensive error boundaries
8. **Validation**: Add form validation logic

## Running the Application

```bash
npm start
```

The application will compile and run on `http://localhost:3000`

---

**Last Updated**: March 13, 2026
