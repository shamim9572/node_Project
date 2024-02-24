
const mongoose = require('mongoose');

// Difine the MongoDB connection URL

const mongoURL = 'mongodb://localhost:27017/hotels'

// setup mongodb connection 
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
// Mongoose maintance a default connection object represtimg the Mongose connection.

const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected',() => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) =>{
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () =>{
    console.log('MongoDB disconnected');
});

//Export the data basese Connection

module.exports = db;


