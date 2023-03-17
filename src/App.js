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

function App() {
  return (
    <React.Fragment>
      <Strip />
      <GovtStrip />
      <Navbar />
      <ImageSlider images={images}/>
      <NewsTicker />
      <Card />
      <DetailTable />
      <Info />
      <Facilation />
      <FormAndCheckList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
