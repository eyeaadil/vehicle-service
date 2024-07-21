const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    vehicle_type: {
        type: String,
        required: true,
    },
    service_type: {
        type: String,
        required: true,
    },
    booking_date: {
        type: Date,
        required: true,
    },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
