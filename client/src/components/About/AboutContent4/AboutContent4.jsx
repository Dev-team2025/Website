import React from 'react';
import './AboutContent4.css'; // Import the CSS file

function AboutContent4() {
    const teamMembers = [
        { name: "Sridhar Murthy", designation: "Co Founder & Director, HR", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Arun R", designation: "Co Founder & Director, Delivery Excellence", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Vijay GH", designation: "Technical Architect", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Dhanya Bangera", designation: "Marketing", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Archana M", designation: "Lead Developer", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Madhusudhan", designation: "Developer", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Kaveri SB", designation: "Developer ", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Sinchana ", designation: "Developer  ", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Harshith", designation: "Developer ", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Anoop Desai ", designation: "Consultant   ", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Chaitra  ", designation: "Consultant   ", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },

    ];

    const rows = [];
    for (let i = 0; i < teamMembers.length; i += 3) {
        rows.push(teamMembers.slice(i, i + 3));
    }

    return (
        <div className="about-container">
            <h1 className="about-heading" style={{ fontSize: "50px" }}>Meet Our Team</h1>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={`team-grid ${rowIndex === rows.length - 1 && row.length === 2 ? 'last-row' : ''}`}>
                    {row.map((member, index) => (
                        <div key={index} className="team-card">
                            <img src={member.image} alt={member.name} className="team-image" />
                            <h2 className="team-name">{member.name}</h2>
                            <p className="team-designation">{member.designation}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default AboutContent4;
