import React, { useState, useRef } from 'react';
import './ServiceContent5.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    const contentRef = useRef(null);

    return (
        <div className="accordion-item">
            <div
                className="accordion-header"
                onClick={onClick}
            >
                <span className="accordion-title">{title}</span>
                <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
            </div>
            <div
                className={`accordion-content ${isOpen ? 'open' : ''}`}
                ref={contentRef}
                style={isOpen ? { maxHeight: contentRef.current?.scrollHeight + 'px' } : { maxHeight: 0 }}
            >
                <div className="accordion-content-inner">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

function ServiceContent5() {
    const [openItem, setOpenItem] = useState(null);

    const items = [
        {
            title: 'Placement Training',
            content: `Launch your career with our comprehensive placement training program. We have customized technical and non-technical skills, from problem solving, analytical skills, coding platforms to professional etiquette's.Academics have benefited from our value additions services such as resume building, mock interviews, group discussions, and LinkedIn profile enhancement.Gain the edge you need to succeed in today's competitive job market.`
        },
        {
            title: 'Research and Development',
            content: 'Our team has put extensive efforts towards working with various departments to build proof of concepts across technology domains, products in the areas of embedded systems and IoT. We have fostered the start- up culture engaging students beyond academics hours working on real time projects in the campus. Our expertise has helped in establishing the laboratory set up in many institutions. We have established the development centres across the campus such as Atal Incubation Centre Nitte, Mangalore Institute of Technology Moodabidri, SDMIT Ujire, Jain college of engineering and research Belagavi'
        },
        {
            title: 'Workshop’s and Faculty Development Programs',
            content: 'Empower your faculty with cutting-edge skills through our development programs and workshops. We are specialized in technology implementation such as full stack, mobile apps, embedded systems, robotics, internet of things, artificial intelligence and many more bridging the gap between theory and practice. Our focus on proof-of-concept development ensures practical application and innovation. Elevate teaching effectiveness and drive institutional growth with our tailored solutions.'
        }
    ];

    return (
        <div className="service-section">
            <div className="service-wrapper">
                <div className="service-layout">
                    <div className="service-image-container">
                        <img
                            src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                            alt="Laptop repair"
                            className="service-image"
                        />
                    </div>
                    <div className="service-info">
                        <h2 className="service-title">Academics </h2>
                        <p className="service-description">
                            The academics institutions be it degree, diploma, engineering or universities, keeping the pace with the industry transformation. The supply of human resources from the campus is definitely need to be an agile workforce to meet the global industry needs.  We are engaged  as specialist to join hands to develop required skill and competence at the academics. These engagements have enabled us to implement skill development programs, conduct workshops, faculty development programs, start-up incubation support for upcoming generation. Collaborating with DLithe have ensured access to cutting-edge expertise and cost-effective solutions across the technology areas.
                        </p>

                        <div className="accordion-wrapper">
                            {items.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    isOpen={openItem === index}
                                    onClick={() => setOpenItem(openItem === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="wave-shape-container">
                <svg
                    viewBox="0 0 1440 120"
                    className="wave-shape"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </div>
    );
}

export default ServiceContent5;
