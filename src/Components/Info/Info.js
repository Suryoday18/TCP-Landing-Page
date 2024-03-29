import { Box } from '@mui/material';
import Development from './Development';
import Notification from './Notification';
// import AuthDetails from '../Cards/AuthDetails'
// import ImportantLinks from '../Cards/ImportantLink'

const Info = () => {
  return (
    <Box sx={{ height: 350, display: 'flex', margin: '20px', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', backgroundColor: '#1F4A7C', marginTop: '50px' }}>
        <Notification />
        <Development />
    </Box>
  );
};

export default Info;