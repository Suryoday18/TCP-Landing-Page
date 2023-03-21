import { Box } from '@mui/material';
import Development from './Development';
import Notification from './Notification';
// import FormChecklist from './FormCheckList';

const Info = () => {
  return (
    <Box sx={{ height: 350, display: 'flex', margin: '20px', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', background: 'linear-gradient(to right, #00E600, #004D00)', marginTop: '50px' }}>
        {/* <FormChecklist /> */}
        <Notification />
        <Development />
    </Box>
  );
};

export default Info;