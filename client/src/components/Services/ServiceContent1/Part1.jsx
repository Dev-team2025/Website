import React from "react";
import PropTypes from "prop-types";
import "./Part1.css";

const Part1 = ({ title, paragraph, button, onButtonClick, onClickContact }) => {
    return (
        <>
            <div className="service-container">
                <div className="service-hero">
                    <div className="service-overlay">
                        <div className="service-content">
                            <h1>{title}</h1>
                            <p>{paragraph}</p>
                            <div className="service-buttons">
                                <button className="quote-btn" onClick={onButtonClick}>
                                    {button}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="action-buttons-wrapper">
                <div className="action-buttons">
                    <button className="contact-btn" onClick={onClickContact}>
                        Contact Us
                    </button>
                    <button className="chat-btn" onClick={() => alert("Live Chat Clicked!")}>
                        Live Chat
                    </button>
                </div>
            </div>
        </>
    );
};

// Prop Types Validation
Part1.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func,
};

// Default Props
Part1.defaultProps = {
    onButtonClick: () => alert("Quote button clicked!"),
};

export default Part1;
