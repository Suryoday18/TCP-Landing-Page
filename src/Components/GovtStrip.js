import { Box } from '@mui/material';
import image from './Azadi.png'

const GovtStrip = () => {
  return (
    <Box sx={{ height: 150, display: 'flex', flexDirection: 'row', bgcolor: '#fff', color: 'black' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
          <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/logo1.png" alt="image2" style={{ width: '60px', height: '60px', margin: '50px 30px 20px 30px' }} />
          <div style={{display: 'flex', flexDirection: 'column', color: '#1F4A7C'}}>
          <h1 style={{fontWeight: '30px'}}>Town and Country Planning Organisation </h1>
          <h2 style={{fontSize: '15.75px', margin: '-10px 0px 0px 0px ', fontWeight: 'bolder'}}>Government of India</h2>
          <h3 style={{margin: '05px 0px 0px 0px', fontSize: '16.38px', fontWeight: 'bolder' }}>Ministry of Housing and Urban Affairs</h3>
          </div>
        </Box>
      <div style={{margin: '50px'}}>
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/emblem.png" alt="image3" style={{ width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px' }} />
      <img src="http://tcpo.gov.in/sites/default/files/TCPO/header-img/swatch-bharat.png" alt="image4" style={{ width: '60px', height: '60px',  marginLeft: '20px', marginRight: '30px' }} />
      <img src='https://www.hsvphry.org.in/assets/img/150-years-Mahatma-Gandhi-Logo.png' alt='image5' style={{width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px'}}/>
      <img src={image} alt='image6' style={{width: '70px', height: '50px', marginLeft: '10px', marginRight: '30px'}} />
      </div>
    </Box>
  );
};

export default GovtStrip;