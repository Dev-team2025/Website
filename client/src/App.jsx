import React from 'react'
import Landingpage from './pages/Landingpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ServicePage from './pages/ServicePage'
// import ResourcesPage from './pages/ResourcesPage'
import ContactUsPage from './pages/ContactUsPage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Landing/Navbar/Navbar'
import ProgramsPage from './pages/ProgramsPage'
import InternshipContent from './components/Programs/Internship/InternshipContent'
import Login from './components/Login/Login'
import BootCampLogin from './components/Login/BootcampLogin'
import Service1 from './components/Services/ServiceAvailable/Service1'
import Service2 from './components/Services/ServiceAvailable/Service2'
import Service3 from './components/Services/ServiceAvailable/Service3'
import Service4 from './components/Services/ServiceAvailable/Service4'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/services' element={<ServicePage />} />
        {/* <Route path='/programs' element={<ResourcesPage />} /> */}
        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/internship' element={<InternshipContent />} />
        <Route path='/bootcamplogin' element={<BootCampLogin />} />
        <Route path='/service1' element={<Service1 />} />
        <Route path='/service2' element={<Service2 />} />
        <Route path='/service3' element={<Service3 />} />
        <Route path='/service4' element={<Service4 />} />
      </Routes>

    </Router>
  )
}

export default App
