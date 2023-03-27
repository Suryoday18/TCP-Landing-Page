import React from 'react';
import './App.css';
import GovtStrip from './Components/GovtStrip';
import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';
import Strip from './Components/Strip';
import images from './Components/data';
import NewsTicker from './Components/NewsTicker';
import Card from './Components/Cards/Card';
import Info from './Components/Info/Info';
import DetailTable from './Components/DetailTable';
import Facilation from './Components/Facilation';
import Footer from './Components/Footer';
import FormAndCheckList from './Components/FormAndCheckList';
import Services from './Components/Cards/Services';
import FooterCard from './Components/Cards/FooterCards';
import MapFooter from './Components/MapFooter';

function App() {
  return (
    <React.Fragment>
      <Strip />
      <GovtStrip />
      <Navbar />
      <ImageSlider images={images}/>
      <NewsTicker />
      <Card />
      <Services />
      <DetailTable />
      <Info />
      <Facilation />
      <FormAndCheckList />
      <FooterCard />
      <MapFooter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
