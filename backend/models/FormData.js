// backend/models/FormData.js

const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: String,
    email: { type: String, required: true },
    message: String,
    dateSubmitted: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FormData', formDataSchema);
