import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', bgcolor: '#0e2948', color: 'white' }}>
        <Typography variant='body1' style={{margin: '20px'}}> 
          Accessbility Statement | Copyright Policy | Disclaimer | Site Map | Feedback | HyperLink Policy | Privacy Policy | Terms & Conditions | Terms & Uses | Help
        </Typography>
        <Typography variant='body2' style={{margin: '25px'}}>
        Copyright © 2023 - All Rights Reserved - Official Website of Town and Country Planning Organisation, Government of India
        <br></br>
        <span style={{marginLeft: '80px'}}>Note: Content on this website is published and managed by Town and Country Planning Organisation</span> 
        <br></br>
        <span style={{marginLeft: '-60px'}}>For any query regarding this website, please contact the web information manager- Mr. X (Additional Chief Planner)</span>
        <br></br>
         <span style={{marginLeft: '150px'}}> E-mail ID: xxxxxx[at]gov[dot]in, Phone: +91-XXXXXXXXXXXXX </span>
        <br></br>
        </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%'}}>
      <img src="http://www.tcpo.gov.in/sites/default/files/vss.jpg" alt="image1" height='50px' style={{marginLeft: '200px', marginRight: '50px'}} />
      <img src="http://www.tcpo.gov.in/sites/default/files/w3c.jpg" alt="image2" height='50px' style={{marginRight: '50px'}}  />
      <img src="http://www.tcpo.gov.in/sites/default/files/icon_W1_a.jpg" alt="image3" height='50px' style={{marginRight: '50px'}}  />
      <img src="http://www.tcpo.gov.in/sites/default/files/itqcr4.png" alt="image4" height='50px' style={{marginRight: '50px'}} />
      </Box>
    </Box>
   
  );
};

export default Footer;