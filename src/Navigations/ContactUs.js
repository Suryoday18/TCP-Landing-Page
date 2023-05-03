import { Paper} from '@mui/material';
import OfficeAddress from '../Components/MapFooter/Address';
import mapImage from '../Components/Icons-Images/maptcp.png'

const ContactUs = () => {
  return (
    <Paper sx={{ width: 'auto', p: 2, backgroundColor: '#1F4A7C',marginTop: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <div style={{width: '400px', color: 'white'}}>
        <h4>Google Map Location</h4>
        <img src={mapImage} alt='mapImage' style={{width: '400px', height: '300px'}}/>
        </div>
        <div style={{width: '400px', color: 'white'}}>
        <h4 style={{marginLeft: '50px'}}>Contact</h4>
        <OfficeAddress />
        </div>
      </div>
    </Paper>
  );
}

export default ContactUs
