const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: Date
});

module.exports = mongoose.model('Contact', ContactSchema);