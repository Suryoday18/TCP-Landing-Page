import { Card, CardContent, Typography } from '@material-ui/core';
import online from '../Icons-Images/online-service.png'
import officer from '../Icons-Images/computer-worker.png'
import fee from '../Icons-Images/fee.png'
import status from '../Icons-Images/project-status.png'
const OurServices = () => {
  return (
    <div>
    <Card style={{maxWidth: 900, height: '400px', margin: '20px', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#1F4A7C",  margin: '10px', color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
          Our Services
        </Typography>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <img src={online} alt="Registered private/professionals" style={{width: '80px', height: 'auto', padding: '10px', margin: '20px', marginLeft: '-60px',objectFit: 'cover'}} />
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '10px', marginTop: '50px', color: '#001A00'}}>
          Online Services
        </Typography>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
       
        <img src={officer} alt="Online User Services" style={{width: '80px', height: 'auto', padding: '10px', margin: '20px'}} />
       
        <Typography variant="body1" component="p" style={{fontSize: '15px', fontWeight: 'bold', margin: '50px 15px 10px 10px', marginTop: '50px', color: '#001A00'}}>
          Officer Login
        </Typography>
        
        </div>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        
        <img src={fee} alt="Fee Calculator" style={{width: '80px', height: '80px', padding: '5px', margin: '10px'}}/>
        
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '30px 40px 10px 10px', color: '#001A00'}}>
          Fee Calculator
        </Typography>
        
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        
        <img src={status} alt="Check/ Track application status" style={{width: '80px', height: '80px', padding: '5px', margin: '10px'}} />
        
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '30px 0px 10px 10px', color: '#001A00'}}>
          Check Application Status
        </Typography>
        </div>
        </div>
        <br></br>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default OurServices