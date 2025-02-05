import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceContent3.css';
import image from '../../../assets/images/service1.jpg';

const ServiceContent3 = () => {
    const navigate = useNavigate();

    const capsuleStyle = {
        width: '90%',
        height: '600px',
        backgroundImage: 'linear-gradient(140deg, rgba(0, 72, 114, 0.9) 0%, #291160 100%)',
        borderTopRightRadius: '300px',
        borderBottomRightRadius: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px',
        margin: 'auto',
        marginTop: '20vh',
        marginBottom: '20vh',
        padding: '1rem',
    };

    return (
        <section className="hero">
            <div style={capsuleStyle}>
                <div className="content">
                    <h1>We create customized offerings to meet your business objectives</h1>
                    <p>
                        Our tailor-made services provide you with the flexibility to build solutions or select programs that ensure quality. We don’t just work; we produce results.
                    </p>
                    <button
                        className="cta-button"
                        onClick={() => navigate("/contactus")}
                    >
                        Get started
                    </button>
                </div>
                <div className='service'>
                    <img src={image} alt="Service" />
                </div>
            </div>
        </section >
    );
};

export default ServiceContent3;
