import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import {BiBuildingHouse} from 'react-icons/bi'
import {GoFileDirectory} from 'react-icons/go'
import {FaWpforms} from 'react-icons/fa'
import {MdPeople} from 'react-icons/md'
import {GrCertificate} from 'react-icons/gr'
import {MdIntegrationInstructions} from 'react-icons/md'
import {BiArea} from 'react-icons/bi'
import {IoDocumentLock, IoBriefcaseSharp} from 'react-icons/io5'



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
    logo: <BiBuildingHouse  style={{width: '100px', height: '100px', fill: '#1F4A7C'}}/>,
  },
  // {
  //   title: 'RTI',
  //   logo: 'https://tcp.hp.gov.in/img/registration.png',
  //   width: '75px'
  // },
  {
    title: 'Directory of Reg. Professionals',
    logo: <GoFileDirectory style={{width: '100px', height: '100px', fill: '#1F4A7C'}} />,
  },
  {
    title: 'Download Form',
    logo: <FaWpforms style={{width: '100px', height: '100px', marginTop: '10px', fill: '#1F4A7C'}}/>,
  },
  {
    title: 'Public Service Guarantee ACT',
    logo: <MdPeople style={{width: '100px', height: '100px', marginTop: '20px', fill: '#1F4A7C'}}/>,
  },
  {
    title: 'License and Essentiality Certifiate',
    logo: <GrCertificate style={{width: '100px', height: '100px', fill: '#1F4A7C'}}/>,
  },
  {
    title: 'Planing Permission Cases',
    logo: <IoBriefcaseSharp style={{width: '100px', height: '100px', fill: '#1F4A7C'}}/>,
  },
  {
    title: 'Instructions/Orders',
    logo: <MdIntegrationInstructions style={{width: '100px', height: '100px', marginTop: '30px', fill: '#1F4A7C'}}/>,
  },
  {
    title: 'Area Locator',
    logo: <BiArea style={{width: '100px', height: '100px', marginTop: '30px', fill: '#1F4A7C'}}/>,
  },
  {
    title: 'Unauthorised constructions complainants',
    logo: <IoDocumentLock style={{width: '100px', height: '100px', fill: '#1F4A7C'}}/>,
  },
];

const Facilation = () => {
  const classes = useStyles();

  return (
    <div style={{background: 'linear-gradient(to right, #FFFFFF, #9999FF)', margin: '20px'}}>
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







