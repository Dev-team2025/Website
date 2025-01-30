import React from 'react'

import Carousel from '../components/Landing/Carousel/Carousel'
import Content from '../components/Landing/Content'
import Content1 from '../components/Landing/Content1/LandingPagePart1'
import Content2 from '../components/Landing/Content2/Content1'
import Content3 from '../components/Landing/Content3/FiveShapers'
import Content4 from '../components/Landing/Content4/Testimonial'
import AboutContent2 from '../components/About/AboutContent2/AboutContent2'
import Footer from '../components/Landing/Footer/Footer'
function Landingpage() {
    return (
        <div>

            <Carousel />
            <Content />
            <Content1 />
            <Content2 />
            <Content3 />
            <AboutContent2 />
            <Content4 />
            <Footer />
        </div>
    )
}

export default Landingpage
