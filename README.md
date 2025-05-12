# MERN Authentication Project

A full-stack authentication system built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User Registration
- User Login
- JWT (JSON Web Token) Authentication
- Protected Routes
- MongoDB Database Integration
- React Router for Navigation
- Bootstrap for Styling
- RESTful API Architecture

## Project Structure

```
Authentication_project/
├── Client/                 # Frontend React application
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── Login.jsx      # Login component
│   │   ├── Signup.jsx     # Registration component
│   │   └── main.jsx       # React entry point
│   └── package.json       # Frontend dependencies
│
└── Server/                # Backend Node.js application
    ├── Model/
    │   └── userModel.js   # User database schema
    ├── db/
    │   └── index.js       # Database connection
    ├── index.js           # Server entry point
    └── package.json       # Backend dependencies
```

## Technology Stack

### Frontend
- React.js
- React Router DOM
- Axios for API calls
- Bootstrap for styling
- Vite for build tooling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs (to be implemented)
- CORS support

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install Backend Dependencies:
```bash
cd Server
npm install
```

3. Install Frontend Dependencies:
```bash
cd Client
npm install
```

4. Set up Environment Variables:
Create a `.env` file in the Server directory with:
```
DB_URL=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

5. Start the Backend Server:
```bash
cd Server
npm start
```

6. Start the Frontend Development Server:
```bash
cd Client
npm run dev
```

## API Endpoints

- `POST /register` - User registration
- `POST /login` - User authentication
- `GET /` - Test route

## Security Considerations

Current Implementation:
- JWT-based authentication
- CORS configuration
- Password length validation

To Be Implemented:
- Password hashing with bcrypt
- Input sanitization
- Rate limiting
- HTTPS support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.