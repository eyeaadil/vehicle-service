const Booking = require('../models/bookingModel');

// Create Booking
exports.createBooking = async (req, res) => {
    try {
        const { user_id, vehicle_type, service_type, booking_date } = req.body;
        const newBooking = await Booking.create({ user_id, vehicle_type, service_type, booking_date });
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Retrieve Booking
exports.getBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (booking) {
            res.json(booking);
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update Booking
exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (booking) {
            res.json(booking);
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Booking
exports.deleteBooking = async (req, res) => {
    try {
        const result = await Booking.findByIdAndDelete(req.params.id);
        if (result) {
            res.json({ message: 'Booking deleted successfully' });
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// List Bookings
exports.listBookings = async (req, res) => {
    try {
        const { date, vehicle_type } = req.query;
        const filters = {};
        if (date) filters.booking_date = { $gte: new Date(date) };
        if (vehicle_type) filters.vehicle_type = vehicle_type;
        const bookings = await Booking.find(filters);
        res.json(bookings);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
