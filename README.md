# 2it Decision

A collaborative lunch decision-making application that enables groups to vote on restaurant choices in real-time. Built with Node.js backend and AngularJS frontend.

## Overview

2it Decision is a lightweight web application designed for small teams to democratically choose where to eat lunch. Users log in, view available restaurant options, cast their daily vote, and see the winning restaurant in real-time. The system enforces voting rules such as daily voting limits and cutoff times to ensure fair decision-making.

## Project Structure

```
twoit/
├── backend/          # Node.js/Express REST API
├── frontend/         # AngularJS single-page application
├── package.json      # Monorepo configuration (if present)
└── README.md         # This file
```

## Technology Stack

### Backend
- **Runtime**: Node.js with Babel (ES2015)
- **Framework**: Express 4.15.4
- **Database**: NeDB (embedded document database)
- **Authentication**: JWT with Passport.js
- **Testing**: Mocha, Chai, Supertest
- **Build**: Babel CLI

### Frontend
- **Framework**: AngularJS 1.6.6
- **Router**: Angular UI-Router
- **Build Tool**: Webpack 3.6.0
- **Testing**: Karma, Jasmine
- **Storage**: ngStorage (local storage wrapper)

## Quick Start

### Prerequisites
- Node.js (v6 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd twoit
```

2. Install backend dependencies
```bash
cd backend
npm install
cd ..
```

3. Install frontend dependencies
```bash
cd frontend
npm install
cd ..
```

### Running the Application

Start the backend (from `/backend` directory):
```bash
npm start
```
Backend runs on `http://localhost:3000`

Start the frontend (from `/frontend` directory, in a new terminal):
```bash
npm start
```
Frontend runs on `http://localhost:8080`

## Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Features

- **User Authentication**: JWT-based login system
- **Place Management**: Create and manage restaurant options
- **Daily Voting**: One vote per user per day per restaurant
- **Voting Rules**:
  - Voting cutoff time: 11:45 AM
  - Places cannot win twice in the same week
  - Automatic winner determination based on daily votes
- **Winner Display**: Real-time display of the winning restaurant
- **Vote History**: Track voting patterns with timestamp records

## API Endpoints

### Authentication
- `POST /login` - User login (returns JWT token)

### Users
- `PUT /users` - Create new user

### Places
- `GET /places` - List all places (requires JWT)
- `PUT /places` - Create new place and vote (requires JWT)
- `POST /places/:placeId/votes` - Add vote to place (requires JWT)
- `GET /winner` - Get today's winning place (requires JWT)

See `backend/README.md` for detailed API documentation with request/response examples.

## Configuration

### Backend Configuration
- Database: File-based NeDB at `backend/data_lunch.db`
- JWT Secret: Configure in `backend/app/services/twoit-jwt.js`
- Server Port: 3000 (configurable via environment variable)

### Frontend Configuration
- Backend API URL: Hardcoded in service files (configure for different environments)
- Dev Server Port: 8080

## Initial Data

The application comes pre-populated with:

### Users
- paulo
- eduardo
- kopzinski
- mello
- daniela

All users have default password: `123123`

### Restaurants
- Mac Donald's
- Burger King
- Whole Foods
- Outback

## Dependency Status and Recommendations

See `DEPENDENCIES.md` for a comprehensive analysis of current dependencies and upgrade recommendations.

## Development Notes

### Testing Coverage
Current test coverage focuses on core endpoint behavior. Additional test coverage is recommended, particularly for:
- Edge cases in voting logic
- Authentication and authorization
- Place management workflows
- Error handling scenarios

### Known Limitations
- Frontend API endpoint is hardcoded to localhost
- No persistent user sessions between page refreshes
- Limited error messaging and validation feedback
- Database is file-based (suitable for small teams only)

## Security Considerations

- JWT secret is hardcoded (should use environment variables)
- CORS is enabled for all origins (should be restricted in production)
- Passwords are stored in plain text (should be hashed)
- No rate limiting on API endpoints
- Input validation is minimal

See security recommendations section in `DEPENDENCIES.md`.

## Contributing

When contributing to this project:
1. Run tests before committing
2. Follow existing code style
3. Add tests for new features
4. Update documentation as needed

## License

- Backend: GPL
- Frontend: ISC

## Contact

Project Author: mellop@dbserver.com.br
