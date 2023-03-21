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
    logo: 'https://tcp.hp.gov.in/img/specialArea.png',
    width: '80px'
  },
  {
    title: 'RTI',
    logo: 'https://tcp.hp.gov.in/img/registration.png',
    width: '75px'
  },
  {
    title: 'Directory of Reg. Professionals',
    logo: 'https://tcp.hp.gov.in/img/architect.png',
    width: '75px'
  },
  {
    title: 'Download Form',
    logo: 'https://tcp.hp.gov.in/img/guranteeAct.png',
    width: '90px'
  },
  {
    title: 'Public Service Guarantee ACT',
    logo: 'https://tcp.hp.gov.in/img/act.png',
    width: '95px'
  },
  {
    title: 'License and Essentiality Certifiate',
    logo: 'https://tcp.hp.gov.in/img/license.png',
    width: '85px'
  },
  {
    title: 'Planing Permission Cases',
    logo: 'https://tcp.hp.gov.in/img/certificate.png',
    width: '72px'
  },
  {
    title: 'Instructions/Orders',
    logo: '	https://tcp.hp.gov.in/img/Miscellaneous.png',
    width: '90px'
  },
  {
    title: 'Area Locator',
    logo: 'https://tcp.hp.gov.in/img/areaLocator.png',
    width: '90px'
  },
  {
    title: 'Unauthorised   constructions complainants',
    logo: '	https://tcp.hp.gov.in/img/onlineComplain.png',
    width: '90px'
  },
];

const Facilation = () => {
  const classes = useStyles();

  return (
    <div style={{background: 'linear-gradient(to right, #FFFFFF, #33FF33)', margin: '20px'}}>
      <Typography variant="h4" component="h1" className={classes.heading} style={{marginLeft: '500px', color: '#001A00', fontWeight: 'bold', fontStyle: 'italic'}}>
        Citizen Facilitation
      </Typography>
      <Grid container justifyContent="center">
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={2} key={card.title}>
            <Card className={classes.card} style={{backgroundColor: '#008000'}}>
            <CardContent className={classes.transparentCard}>
                <Typography gutterBottom variant="p" component="p" style={{fontSize: '13px', margin: '12px', color: 'white',fontWeight: 'bold'}}>
                  {card.title}
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={card.logo}
                title={card.title}
                style={{width: `${card.width}`,  marginLeft: '15px'}}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Facilation;







