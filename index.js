const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/dbConnect');
const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/authRoutes');
const rateLimiter = require('./utils/rateLimiter');
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Express setup
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(rateLimiter);

// Routes
app.use('/bookings',rateLimiter, bookingRoutes);
app.use('/auth', authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
