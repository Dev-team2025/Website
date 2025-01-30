import React, { useState } from 'react';
import axios from 'axios';
import './ContactContent2.css';

const ContactContent2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: '',
        batch: '',
        message: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Form submitted successfully:', response.data);
            setSuccess('Form submitted successfully!');
            setError('');
            setFormData({
                name: '',
                email: '',
                phone: '',
                program: '',
                batch: '',
                message: '',
            });
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
            setError('Failed to submit form. Please try again.');
            setSuccess('');
        }
    };


    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="program">Interested Program</label>
                    <select id="program" name="program" value={formData.program} onChange={handleChange} required>
                        <option value="internship">Internship</option>
                        <option value="bootcamp">Bootcamp</option>
                        <option value="workshop">Workshop</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="batch">Batch</label>
                    <select id="batch" name="batch" value={formData.batch} onChange={handleChange} required>
                        <option value="batch1">Batch 1</option>
                        <option value="batch2">Batch 2</option>
                        <option value="batch3">Batch 3</option>
                        <option value="batch4">Batch 4</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactContent2;
