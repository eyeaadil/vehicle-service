// const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');
require('dotenv').config();

// User Registration
exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// User Login
exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user && await user.comparePassword(password)) {
            const accessToken = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET);
            res.json({ accessToken });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
