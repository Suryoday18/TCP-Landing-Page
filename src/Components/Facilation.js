import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent, Typography } from '@mui/material';
// import {BiBuildingHouse} from 'react-icons/bi'
// import {GoFileDirectory} from 'react-icons/go'
// import {FaWpforms} from 'react-icons/fa'
// import {MdPeople} from 'react-icons/md'
// import {GrCertificate} from 'react-icons/gr'
// import {MdIntegrationInstructions} from 'react-icons/md'
// import {BiArea} from 'react-icons/bi'
// import {IoDocumentLock, IoBriefcaseSharp} from 'react-icons/io5'
import Skywrapper from './Icons-Images/building.png'
import Case from './Icons-Images/case.png'
import Task from './Icons-Images/task.png'
import Resource from './Icons-Images/resource.png'
import Certi from './Icons-Images/diploma.png'
import Application from './Icons-Images/application.png'
import Instruction from './Icons-Images/instructions.png'
import Location from './Icons-Images/location.png'
import Complain from './Icons-Images/complain.png'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '30px',
        backgroundImage: `url('https://tcp.hp.gov.in/img/bg.jpg')`,
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',  
      },
  heading: {
    marginLeft: '100px'
  },
  card: {
    width: '160px',
    margin: '20px', 
    height: '200px'

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  transparentCard: {
    
  },
}));

const cards = [
  {
    title: 'Notified Planning/Special Area',
    logo: <img src={Skywrapper} alt='image1' style={{width: '100px', height: '100px'}}/>
  },
  // {
  //   title: 'RTI',
  //   logo: 'https://tcp.hp.gov.in/img/registration.png',
  //   width: '75px'
  // },
  {
    title: 'Directory of Reg. Professionals',
    logo: <img src={Case} alt='image2' style={{width: '100px', height: '100px'}}/>
  },
  {
    title: 'Download Form',
    logo: <img src={Task} alt='image3' style={{width: '100px', height: '100px'}}/>

  },
  {
    title: 'Public Service Guarantee ACT',
    logo: <img src={Resource} alt='image4' style={{width: '100px', height: '100px'}}/>
  },
  {
    title: 'License and Essentiality Certifiate',
    logo: <img src={Certi} alt='image5' style={{width: '100px', height: '100px'}}/>
  },
  {
    title: 'Planing Permission Cases',
    logo: <img src={Application} alt='image6' style={{width: '100px', height: '100px'}}/>
  },
  {
    title: 'Instructions/Orders',
    logo: <img src={Instruction} alt='image7' style={{width: '100px', height: '100px'}}/>
  },
  {
    title: 'Area Locator',
    logo: <img src={Location} alt='image8' style={{width: '100px', height: '100px'}}/>
  },
  {
    title: 'Unauthorised constructions complainants',
    logo: <img src={Complain} alt='image9' style={{width: '100px', height: '100px'}}/>
  },
];

const Facilation = () => {
  const classes = useStyles();

  return (
    <div style={{margin: '20px'}}>
      <Typography variant="h4" component="h1" className={classes.heading} style={{marginLeft: '500px', color: '#330031', fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline'}}>
        Citizen Facilitation
      </Typography>
      <Grid container justifyContent="center">
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={2} key={card.title}>
            <Card className={classes.card} style={{background: 'linear-gradient(to bottom, #FFFFFF, #CCCCFF)'}}>
            <CardContent className={classes.transparentCard}>
                <Typography gutterBottom variant="p" component="p" style={{fontSize: '14px', margin: '12px', color: '#330032',fontWeight: 'bold',}}>
                  {card.title}
                </Typography>
              </CardContent>
              {/* <CardMedia
                className={classes.media}
                image={card.logo}
                title={card.title}
                style={{width: `${card.width}`,  marginLeft: '15px'}}
              /> */}
              <div style={{ display: 'flex', justifyContent: 'center'}}>
                 {card.logo}
                </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Facilation;







