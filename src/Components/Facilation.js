import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

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
    width: '130px',
    margin: '20px', 
    height: '160px'

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
    logo: 'https://tcp.hp.gov.in/img/specialArea.png',
  },
  {
    title: 'RTI',
    logo: 'https://tcp.hp.gov.in/img/registration.png',
  },
  {
    title: 'Directory of Reg. Professionals',
    logo: 'https://tcp.hp.gov.in/img/architect.png',
  },
  {
    title: 'Download Form',
    logo: 'https://tcp.hp.gov.in/img/guranteeAct.png',
  },
  {
    title: 'Public Service Guarantee ACT',
    logo: 'https://tcp.hp.gov.in/img/act.png',
  },
  {
    title: 'License and Essentiality Certifiate',
    logo: 'https://tcp.hp.gov.in/img/license.png',
  },
  {
    title: 'Planing Permission Cases',
    logo: 'https://tcp.hp.gov.in/img/certificate.png',
  },
  {
    title: 'Instructions/Orders',
    logo: '	https://tcp.hp.gov.in/img/Miscellaneous.png',
  },
  {
    title: 'Area Locator',
    logo: 'https://tcp.hp.gov.in/img/areaLocator.png',
  },
  {
    title: 'Unauthorised   constructions complainants',
    logo: '	https://tcp.hp.gov.in/img/onlineComplain.png',
  },
];

const Facilation = () => {
  const classes = useStyles();

  return (
    <div style={{background: 'linear-gradient(to right, #FFF5FF, #FF4DFF)', margin: '20px'}}>
      <Typography variant="h4" component="h1" className={classes.heading} style={{marginLeft: '500px', color: '#330032', fontWeight: 'bold', fontStyle: 'italic'}}>
        Citizen Facilitation
      </Typography>
      <Grid container justifyContent="center">
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={2} key={card.title}>
            <Card className={classes.card} style={{backgroundColor: '#80007F'}}>
              <CardMedia
                className={classes.media}
                image={card.logo}
                title={card.title}
                style={{width: '60px', margin: '15px'}}
              />
              <CardContent className={classes.transparentCard}>
                <Typography gutterBottom variant="p" component="p" style={{fontSize: '12px', color: 'white'}}>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Facilation;







