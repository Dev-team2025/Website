import React from "react";
import "./ProgramsContent5.css";
import applynow from '../../../assets/images/programs/applynow.jpg'
const ProgramsContent5 = () => {
    return (
        <div className="programs-content5-container">
            <div className="programs-content5">
                {/* Left Section: Image */}
                <div className="left-section">
                    <img
                        src={applynow}
                        alt="Smiling woman with laptop"
                        className="left-image"
                    />
                </div>

                {/* Right Section: Text */}
                <div className="right-section">
                    <h2>Apply now</h2>
                    <p>
                        Are you ready to discover? Our programs are designed to invest in you,<br /> your potential, and your
                        future.
                    </p>
                    <div className="links">
                        <a href="#">Internship opportunities →</a>
                        <a href="#">Certification Programs →</a>
                        <a href="#">Bootcamp →</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramsContent5;
