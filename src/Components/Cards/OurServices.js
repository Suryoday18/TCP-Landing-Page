import { Card, CardContent, Typography } from '@material-ui/core';

const OurServices = () => {
  return (
    <div>
    <Card style={{maxWidth: 900, height: 420, background: 'linear-gradient(to right, #F5FFF5, #00B300)', margin: '10px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}}>
      <CardContent>
        <Typography variant="h5" style={{ backgroundColor: "#003300",  margin: '10px', color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
          Our Services
        </Typography>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
            <img src="https://obpsud.hp.gov.in/img/professionals.png" alt="Registered private/professionals" style={{width: '80px', height: '80px', padding: '10px', margin: '20px', borderRadius: '50%', backgroundColor: '#CCFFCC', border: '2px solid #004D00'}} />
        </div>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '20px', marginTop: '40px', color: '#001A00'}}>
          Online Services
        </Typography>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/user.png" alt="Online User Services" style={{width: '80px', height: '80px', padding: '10px', margin: '20px', borderRadius: '50%', backgroundColor: '#CCFFCC', border: '2px solid #004D00'}} />
        </div>
        <Typography variant="body1" component="p" style={{fontSize: '15px', fontWeight: 'bold', margin: '20px', marginTop: '40px', color: '#001A00'}}>
          Officer Login
        </Typography>
        
        </div>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/budget.png" alt="Fee Calculator" style={{width: '80px', height: '80px', padding: '5px', margin: '20px', borderRadius: '50%', backgroundColor: '#CCFFCC', border: '2px solid #004D00'}}/>
        </div>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '20px', marginTop: '40px', color: '#001A00'}}>
          Fee Calculator
        </Typography>
        
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'row'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
        <img src="https://obpsud.hp.gov.in/img/businessman.png" alt="Check/ Track application status" style={{width: '80px', height: '80px', padding: '5px', margin: '20px', borderRadius: '50%', backgroundColor: '#CCFFCC', border: '2px solid #004D00'}} />
        </div>
        <Typography variant="body1" component="p" style={{fontSize: '15px', padding: '5px', fontWeight: 'bold', margin: '20px', marginTop: '40px', color: '#001A00'}}>
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