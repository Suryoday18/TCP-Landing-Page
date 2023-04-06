import { Box } from '@mui/material';
import Himanchal from './Icons-Images/Himanchal.png'

const GovtStrip = () => {
  return (
    <Box sx={{ height: 180, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', bgcolor: '#fff', color: 'black' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
          <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/logo1.png" alt="image2" style={{ width: '90px', height: '90px', margin: '20px 30px 20px 30px' }} />
          <div style={{display: 'flex', flexDirection: 'column', color: '#1F4A7C', width: '500px', height: 'auto', border: '2px solid #1F4A7C', position:'relative'}}>
          
          <h4 style={{fontWeight: '30px', margin: '10px', width: '125px', position: 'absolute', top: '-20px', backgroundColor: 'white'}}>हिमाचल प्रदेश सरकार</h4>
          <h2 style={{color: '#154773', margin: '20px 10px 10px 10px'}}>नगर एवम् ग्राम योजना विभाग</h2>
          <h2 style={{fontWeight: '30px', margin: '10px'}}>Town & Country Planning Department </h2>
          <h6 style={{fontSize: '15.75px', color: '#154773',margin: '10px 10px 10px 180px', position: 'absolute', bottom:'-20px', backgroundColor: 'white'}}>Government of Himanchal Pardesh</h6>
          
          </div>
        </Box>
      <div style={{margin: '10px'}}>
      <img src={Himanchal} alt='himanchal' style={{width: '150px', height: '120px', margin: '10px'}}/>
      <img src='http://tcpo.gov.in/sites/default/files/amrit_mahotsav.jpg' alt='image5' style={{width: '120px', height: '120px', margin: '10px'}}/> 
      <img src="http://tcpo.gov.in/sites/default/files/TCPO/header-img/swatch-bharat.png" alt="image4" style={{ width: '120px',  margin: '10px 10px 50px 10px'}} /> 
      <img src='http://tcpo.gov.in/sites/default/files/TCPO/header-img/150-years.png' alt='image5' style={{width: '120px', margin: '20px 10px 30px 10px'}}/>  
      {/* <img src="http://www.ud.hp.gov.in/sites/default/files/inline-images/emblem.png" alt="image3" style={{ width: '60px', height: '60px', margin: '10px'}} /> */}
      </div>
    </Box>
  );
};

export default GovtStrip;