const mongoose = require('mongoose');
require('dotenv').config();

// Use DB_URL from the .env file
const uri = process.env.DB_URL;

mongoose.set('strictQuery', false); // Or true if you prefer

// Connection string for local MongoDB
// const localDB = 'mongodb://127.0.0.1:27017/Polling_System';

// Connection options
const connectParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connecting to the local MongoDB
mongoose.connect(uri, connectParams);

// Handling connection errors and success
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the database'));

db.once('open', () => {
    console.log("Successfully connected to the database: MongoDB");
});

module.exports = mongoose;
