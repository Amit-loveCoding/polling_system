const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);  // Suppress strictQuery warning

const uri = process.env.DB_URL;

const connectParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, connectParams)
    .then(() => {
        console.log("Successfully connected to MongoDB Atlas");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB Atlas:", error.message);
    });

module.exports = mongoose;
