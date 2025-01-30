const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// Define the POST route for /contact
router.post('/', submitContactForm);

module.exports = router;
