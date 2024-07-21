# Vehicle Service Booking System

A RESTful API for a vehicle service booking system built with Node.js, Express, and MongoDB. This system allows users to create, update, delete, and retrieve booking information for vehicle services.

## Features

- User authentication with JWT
- Create, read, update, and delete vehicle service bookings
- List all bookings with optional filters by date and vehicle type
- Rate limiting to prevent API abuse

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) for authentication
- Rate limiting middleware

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later) installed
- MongoDB installed and running
- npm (usually comes with Node.js)

## Getting Started

To get the Vehicle Service Booking System running locally:

### Installation

1. Clone the repository
   ```bash
   https://github.com/eyeaadil/vehicle-service.git
   cd vehicle-service



### Install dependencies
npm install

### Set up environment variables Create a .env file in the root directory and add the following:
MONGO_URL=mongodb://127.0.0.1:27017/vehicle-service
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
PORT=3000
## Replace your_jwt_secret_here with a secure secret key.


### Start the server
node index.js

The server should now be running on http://localhost:3000.

### API Endpoints
 ## Authentication
 POST /auth/register - Register a new user
 Body: { "username": "user", "password": "pass" }

 POST /auth/login - Login and receive JWT token
 Body: { "username": "user", "password": "pass" }

 ## Bookings
 All booking routes require authentication. Include the JWT
 
### token in the Authorization header:
Authorization: Bearer your_token_here

GET /bookings - List all bookings

Query parameters:

date: Filter by date (ISO format)
vehicleType: Filter by vehicle type




POST /bookings - Create a new booking
Body: { "vehicleType": "car", "serviceType": "oil change", "bookingDate": "2023-07-25T10:00:00Z" }


GET /bookings/:id - Get a specific booking

PATCH /bookings/:id - Update a booking
Body: { "serviceType": "tire rotation" }


DELETE /bookings/:id - Delete a booking


### Environment Variables

MONGO_URL: MongoDB connection string
JWT_SECRET: Secret key for JWT token generation and verification
PORT: Port on which the server will run