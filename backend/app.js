const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const formRoutes = require('./routes/formRoutes');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/form', formRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
