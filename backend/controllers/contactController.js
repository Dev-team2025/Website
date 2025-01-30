const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Failed to submit form' });
    }
};
