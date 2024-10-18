// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Personal Finance Tracker!');
});

// Route for user registration
app.post('/register', (req, res) => {
    // Logic for registering a user
    res.send('User registration endpoint');
});

// Route for user login
app.post('/login', (req, res) => {
    // Logic for user login
    res.send('User login endpoint');
});

// Route for adding a transaction
app.post('/transaction', (req, res) => {
    // Logic for adding a transaction
    res.send('Add transaction endpoint');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});