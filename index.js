require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware for parsing JSON bodies
app.use(bodyParser.json()); // for JSON payloads
app.use(bodyParser.urlencoded({ extended: true })); // for URL-encoded payloads

const db = require('./config/mongoose'); // Ensure MongoDB connection is properly established

// Routes
app.use('/', require('./routes/index'));

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
