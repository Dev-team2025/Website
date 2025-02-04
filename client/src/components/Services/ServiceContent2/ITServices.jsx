import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './ITServices.css'; // Import custom CSS for styling
import { FaLaptop, FaProjectDiagram, FaUserTie, FaBrain, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const ITServices = () => {
    const navigate = useNavigate(); // Initialize navigate

    const services = [
        { title: "IT Application Development", color: "#FF8A00", textColor: "#fff", icon: <FaLaptop />, path: "/service1" },
        { title: "Campus to Corporate", color: "#fff", textColor: "#000", icon: <FaChalkboardTeacher />, path: "/service2" },
        { title: "Bootcamp ", color: "#f4f4f4", textColor: "#000", icon: <FaBrain />, path: "/service3" },
        { title: "Learning & Development ", color: "#f4f4f4", textColor: "#000", icon: <FaUserGraduate />, path: "/service4" },
        { title: "Placement Competency Development ", color: "#002b5b", textColor: "#fff", icon: <FaUserTie />, path: "/services/cloud-services" },
        { title: "Research & Development", color: "#FF8A00", textColor: "#fff", icon: <FaProjectDiagram />, path: "/services/cyber-security" },
    ];

    return (
        <div className="services-wrapper">
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-container">
                        <div
                            className="service-card"
                            style={{
                                backgroundColor: service.color,
                                color: service.textColor,
                            }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                        </div>
                        <button
                            className="learn-more-button"
                            onClick={() => navigate(service.path)} // Navigate to the service's page
                        >
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ITServices;
