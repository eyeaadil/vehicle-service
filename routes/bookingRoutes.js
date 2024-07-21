const express = require('express');
const router = express.Router();
const {
    createBooking,
    getBooking,
    updateBooking,
    deleteBooking,
    listBookings
} = require('../controllers/bookingController');
const authenticateJWT = require('../middleware/authMiddleware');
const rateLimiter = require('../utils/rateLimiter');

// Create Booking
router.post('/', authenticateJWT, rateLimiter, createBooking);

// Retrieve Booking
router.get('/:id', authenticateJWT, rateLimiter, getBooking);

// Update Booking
router.put('/:id', authenticateJWT, rateLimiter, updateBooking);

// Delete Booking
router.delete('/:id', authenticateJWT, rateLimiter, deleteBooking);

// List Bookings
router.get('/', authenticateJWT, rateLimiter, listBookings);

module.exports = router;
