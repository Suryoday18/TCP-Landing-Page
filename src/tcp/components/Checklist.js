import { Box } from '@mui/material';
import Development from './Development';
import Form from './Form';
import Notification from './Notification';

const CheckList = () => {
  return (
    <Box sx={{ height: 350, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', bgcolor: '#f0f0f0', marginTop: '10px' }}>
        <Form />
        <Notification />
        <Development />
    </Box>
  );
};

export default CheckList;