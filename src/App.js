import React from 'react';
import './App.css';
import GovtStrip from './Components/GovtStrip';
import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';
import Strip from './Components/Strip';
import images from './Components/data';
import NewsTicker from './Components/NewsTicker';
import Facilation from './Components/Facilation';
import Footer from './Components/Footer';
import FormAndCheckList from './Components/FormAndCheckList';
import AuthAndServices from './Components/Cards/AuthAndServices';
import MapFooter from './Components/MapFooter';
import LinksSlideshow from './Components/Cards/ImportantLinks'
import Card from './Components/Cards/Card'
import { Route, Routes } from 'react-router-dom';
import Objectives from './Navigations/Objective';
import OrganizationalSetup from './Navigations/OrganizationalSetup';
import ContactUs from './Navigations/ContactUs';
import EmployeeProfile from './Navigations/EmployeeProfile';
import ExEmployeeProfile from './Navigations/ExEmployeeProfile';
import Appendix8 from './Navigations/Appendix8';
import Appendix1 from './Navigations/Appendix1';
import AppartmentRegulation from './Navigations/ApartmentRegulation';
import CourtOrders from './Navigations/CourtOrders';
import NotificationTCPAct from './Navigations/NotificationTCPAct'
import ServiceMatter from './Navigations/ServiceMatter'
import PhotoGallery from './Navigations/PhotoGallery';
import VideoGallery from './Navigations/VideoGallery';
import HeritageGallery from './Navigations/HeritageGallery';
import Delegation from './Navigations/Delegation.js'


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Strip />
      <GovtStrip />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};


function App() {
  return (
    <Routes>
      <Route path='/objectives' element={<Layout><Objectives /></Layout>} />
      <Route path='/organizational-setup' element={<Layout><OrganizationalSetup /></Layout>} />
      <Route path='/contact-us' element={<Layout><ContactUs /></Layout>} />
      <Route path='/employee-profile' element={<Layout><EmployeeProfile /></Layout>} />
      <Route path='/ex-employee-profile' element={<Layout><ExEmployeeProfile /></Layout>} />
      <Route path='/appendix-1' element={<Layout><Appendix1 /></Layout>} />
      <Route path='/appendix-8' element={<Layout><Appendix8 /></Layout>} />
      <Route path='/apartment-colonies-regulation' element={<Layout><AppartmentRegulation /></Layout>} />
      <Route path='/court-orders' element={<Layout><CourtOrders /></Layout>} />
      <Route path='/notifications-under-tcp-act' element={<Layout><NotificationTCPAct /></Layout>} />
      <Route path='/service-matter' element={<Layout><ServiceMatter /></Layout>} />
      <Route path='/photo-gallery' element={<Layout><PhotoGallery /></Layout>} />
      <Route path='/video-gallery' element={<Layout><VideoGallery /></Layout>} />
      <Route path='/heritage-gallery' element={<Layout><HeritageGallery /></Layout>} />
      <Route path='/delegation-of-powers' element={<Layout><Delegation /></Layout>} />
      <Route path='/*' element={<Layout>
        <ImageSlider images={images}/>
        <NewsTicker />
        <Card />
        <AuthAndServices />
        <Facilation />
        <FormAndCheckList />
        <LinksSlideshow />
        <MapFooter />
      </Layout>} />
    </Routes>
  );
}
export default App;
