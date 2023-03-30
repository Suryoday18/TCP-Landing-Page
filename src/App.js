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
// import Services from './Components/Cards/Services';
import AuthAndServices from './Components/Cards/AuthAndServices';
// import FooterCard from './Components/Cards/FooterCards';
import MapFooter from './Components/MapFooter';
import LinksSlideshow from './Components/Cards/ImportantLinks'
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Roboto from '@fontsource/roboto';



// const theme = createMuiTheme({
//   typography: {
//     fontFamily: ['Open Sans', 'sans-serif'].join(','),
//   },
//   overrides: {
//     MuiCssBaseline: {
//       '@global': {
//         '@font-face': [Roboto],
//       },
//     },
//   },
// });


function App() {
  return (
    <React.Fragment>
      {/* <ThemeProvider theme={theme}> 
      <CssBaseline /> */}
      <Strip />
      <GovtStrip />
      <Navbar />
      <ImageSlider images={images}/>
      <NewsTicker />
      <Card />
     <AuthAndServices />
      <DetailTable />
      <Info />
      <Facilation />
      <FormAndCheckList />
      <LinksSlideshow />
      {/* <FooterCard /> */}
      <MapFooter />
      <Footer />
    {/* </ThemeProvider>  */}
    </React.Fragment>
  );
}

export default App;
