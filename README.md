# VETDOCTOR - React Version

A modern veterinary practice management dashboard built with React. This is a conversion of the original vanilla JavaScript application to a React-based architecture.

## Project Structure

```
src/
├── App.js                          # Main app component
├── index.js                        # React entry point
├── pages/
│   ├── LoginPage.js               # Login page component
│   └── DashboardPage.js           # Main dashboard container
├── components/
│   ├── Sidebar.js                 # Navigation sidebar
│   ├── Header.js                  # Top header with profile
│   ├── AvailabilitySection.js     # Availability management
│   ├── AppointmentsSection.js     # Appointment requests
│   └── HistorySection.js          # Work history and logs
└── styles/
    ├── main.css                   # Global styles
    └── dashboard.css              # Dashboard-specific styles
public/
└── index.html                     # HTML entry point
package.json                       # Dependencies and scripts
```

## Features

- **Login Page**: Doctor authentication (demo)
- **Dashboard**: Multi-page layout with sidebar navigation
- **Availability Management**: Manage daily schedules and patient capacity
- **Appointment Requests**: Review and approve/decline appointment requests
- **Work History**: View completed procedures and patient logs
- **Search & Export**: Filter history and export data as CSV
- **Responsive Design**: Clean, modern UI with glassmorphism styling

## Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Navigate to the project directory:
```bash
cd VETDOCTOR
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## Key Changes from Vanilla JS

- **State Management**: Uses React hooks (useState) instead of direct DOM manipulation
- **Components**: Modular component structure for better maintainability
- **Routing**: Single-page app with client-side page switching via state
- **Event Handling**: React event handlers instead of vanilla JS listeners
- **Styling**: CSS files imported as modules, maintaining the original design

## Styling

The application uses custom CSS with CSS variables for theming:
- **Colors**: Forest green primary, indigo accents
- **Effects**: Glassmorphism design with backdrop blur
- **Typography**: Inter font family
- **Animations**: Smooth fade-in and hover transitions

## Demo Credentials

- **Email**: doctor@vetdoctor.com
- **Password**: password123

## Future Enhancements

- Add backend API integration
- Implement real authentication
- Add state management library (Redux/Context API)
- Create unit and integration tests
- Add TypeScript support
- Mobile responsiveness improvements

## License

MIT
