import React from 'react';
import './Testimonial.css';

const testimonials = [
    {
        id: 1,
        text: `Our partnership with DLithe for Learning & Development has been invaluable. Their tailored programs have significantly enhanced our team's performance and addressed our specific skill gaps.We've seen a measurable improvement in productivity and employee engagement.`,
        author: 'Vibha Mishra',
        position: 'L&D Manager, TietoEvry',
        bgColor: 'orange'
    },
    {
        id: 2,
        text: `The bootcamp provided by DLithe exceeded our expectations. The quality of the resources, the domain process and technical expertise, and the hands-on approach were instrumental in preparing our team for real-world challenges. We've hired several graduates and are consistently impressed with their skills.`,
        author: 'Nagaraju',
        position: 'Delivery Head, TietoEvry',
        bgColor: 'gray'
    },
    {
        id: 3,
        text: `Thanks to DLithe’s placement training, our hiring success rate has dramatically increased. The comprehensive curriculum, combined with mock interviews and personalized feedback, gave our candidates the confidence and skills they needed to excel. We've onboarded several talented individuals who are already making significant contributions.`,
        author: 'Bharat Kumar',
        position: 'NMAMIT, Nitte',
        bgColor: 'gray'
    },
    {
        id: 4,
        text: `The Faculty Development Program offered by DLithe was transformative. The emphasis on practical application and real-time implementation in the Artificial Intelligence domain made a significant difference in our faculty's ability to integrate new technologies into the classroom.Our instructors are now more confident and effective in their teaching.`,
        author: 'Dr Mohan Kumar',
        position: 'PESCE(MCA Department), Mandya',
        bgColor: 'navy'
    }
];

const Testimonial = () => {
    return (
        <section className="testimonials">
            <h2 className="section-title">What People Are Saying</h2>
            <div className="testimonial-grid">
                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className={`testimonial-card ${item.bgColor}`}
                    >
                        <p className="testimonial-text">“{item.text}”</p>
                        <p className="testimonial-author">
                            <strong>{item.author}</strong>
                            <br />
                            {item.position}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
