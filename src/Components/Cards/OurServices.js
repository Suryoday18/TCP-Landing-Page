import { Card, CardContent, Typography } from '@material-ui/core';

const OurServices = () => {
  return (
    <div>
    <Card style={{maxWidth: 900, height: 'auto', background: 'linear-gradient(to right, #F5FFF5, #B3B3FF)', margin: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#1F4A7C",  margin: '10px', color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
          Our Services
        </Typography>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <img src="https://obpsud.hp.gov.in/img/professionals.png" alt="Registered private/professionals" style={{width: '80px', height: 'auto', padding: '10px', margin: '20px', marginLeft: '-60px', borderRadius: '50%',bbjectFit: 'cover', border: '2px solid #1F4A7C'}} />
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '10px', marginTop: '50px', color: '#001A00'}}>
          Online Services
        </Typography>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
       
        <img src="https://obpsud.hp.gov.in/img/user.png" alt="Online User Services" style={{width: '80px', height: 'auto', padding: '10px', margin: '20px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #1F4A7C'}} />
       
        <Typography variant="body1" component="p" style={{fontSize: '15px', fontWeight: 'bold', margin: '50px 15px 10px 10px', marginTop: '50px', color: '#001A00'}}>
          Officer Login
        </Typography>
        
        </div>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        
        <img src="https://obpsud.hp.gov.in/img/budget.png" alt="Fee Calculator" style={{width: '80px', height: '80px', padding: '5px', margin: '10px', marginLeft: '60px', borderRadius: '50%', border: '2px solid #1F4A7C'}}/>
        
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '30px 40px 10px 10px', color: '#001A00'}}>
          Fee Calculator
        </Typography>
        
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        
        <img src="https://obpsud.hp.gov.in/img/businessman.png" alt="Check/ Track application status" style={{width: '80px', height: '80px', padding: '5px', margin: '10px', marginLeft: '50px', borderRadius: '50%', border: '2px solid #1F4A7C'}} />
        
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '10px', marginTop:'30px', color: '#001A00'}}>
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