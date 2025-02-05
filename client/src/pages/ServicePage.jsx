import React from 'react';
import { useNavigate } from 'react-router-dom';
import Part1 from '../components/Services/ServiceContent1/Part1';
import ITServices from '../components/Services/ServiceContent2/ITServices';
import Content3 from '../components/Services/ServiceContent3/ServiceContent3';
import ServiceContent4 from '../components/Services/ServiceContent4/ServiceContent4';
import ServiceContent5 from '../components/Services/ServiceContent5/ServiceContent5';
import Testimonial from '../components/Landing/Content4/Testimonial';
import Footer from '../components/Landing/Footer/Footer';

function ServicePage() {
    const navigate = useNavigate();

    return (
        <div>
            <Part1
                title="IT Services and Learning & Development"
                paragraph="We are a leading IT professional services company with two decades of rich experience in delivery excellence, learning & development, and human resource functions. Our services are adding values to our customers in achieving greater customer experience."
                button="Contact us"
                onButtonClick={() => navigate("/contactus")}
                onClickContact={() => navigate("/contactus")}
            />
            <ITServices />
            <Content3 />
            <ServiceContent4 />
            <ServiceContent5 />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default ServicePage;
