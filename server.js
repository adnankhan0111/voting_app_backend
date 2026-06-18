const express = require('express');
const app = express();
require('dotenv').config();

// Database Connection
const db = require('./db');

// Middleware
app.use(express.json());

// Port
//const PORT = process.env.PORT || 3000;

// Routes
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Route Middleware
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('Voting App Server Running');
});

// Start Server
app.listen(3000, () => {
    console.log(`🚀 Server is running on port 3000`);
});