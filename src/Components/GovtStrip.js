import { Box } from '@mui/material';
import Himanchal from './Icons-Images/Himanchal.png'

const GovtStrip = () => {
  return (
    <Box sx={{ height: 180, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', bgcolor: '#fff', color: 'black' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
          <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/logo1.png" alt="image2" style={{ width: '90px', height: '90px', margin: '20px 30px 20px 30px' }} />
          <div style={{display: 'flex', flexDirection: 'column', color: '#1F4A7C'}}>
          <h1 style={{fontWeight: '30px'}}>Town And Country Planning Department </h1>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <h2 style={{fontSize: '15.75px', margin: '-10px 0px 0px 0px ', color: '#154773'}}>Government of Himanchal Pardesh</h2>
          <img src={Himanchal} alt='himanchal' style={{width: '60px', height: '40px', margin: '-20px 0px 0px 0px'}}/>
          </div>
          </div>
        </Box>
      <div style={{margin: '10px'}}>
      <img src='http://tcpo.gov.in/sites/default/files/amrit_mahotsav.jpg' alt='image5' style={{width: '140px', height: '140px', margin: '10px'}}/> 
      <img src="http://tcpo.gov.in/sites/default/files/TCPO/header-img/swatch-bharat.png" alt="image4" style={{ width: '136px',  margin: '10px 10px 50px 10px'}} /> 
      <img src='http://tcpo.gov.in/sites/default/files/TCPO/header-img/150-years.png' alt='image5' style={{width: '120px', margin: '20px 10px 30px 10px'}}/>  
      {/* <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/emblem.png" alt="image3" style={{ width: '60px', height: '60px', margin: '10px'}} /> */}
      </div>
    </Box>
  );
};

export default GovtStrip;