import { Box } from '@mui/material';
import image from './Azadi.png'

const GovtStrip = () => {
  return (
    <Box sx={{ height: 80, display: 'flex', flexDirection: 'row', bgcolor: '#fff5ff' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
        <img src="https://tcp.hp.gov.in/img/eng_logo.png" alt="image1" style={{ width: '300px', height: '60px', padding: '10px', marginLeft: '30px'}} />
        </Box>
      <div style={{marginLeft: '400px', marginTop: '10px'}}>
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/logo1.png" alt="image2" style={{ width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px' }} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/emblem.png" alt="image3" style={{ width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px' }} />
      <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/G20-theme-and-logo_1.png" alt="image4" style={{ width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px' }} />
      <img src='https://www.hsvphry.org.in/assets/img/150-years-Mahatma-Gandhi-Logo.png' alt='image5' style={{width: '50px', height: '50px', marginLeft: '20px', marginRight: '30px'}}/>
      <img src={image} alt='image6' style={{width: '70px', height: '50px', marginLeft: '10px', marginRight: '30px'}} />
      </div>
    </Box>
  );
};

export default GovtStrip;