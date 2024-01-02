const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/blog', {});


db.on('error', (error) => {
    console.log('oooooooooooooooooooooo')
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('MongoDB connection established');
});

module.exports = db;




