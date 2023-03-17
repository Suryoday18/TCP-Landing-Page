import React from 'react';
import { Card, CardContent, Typography, List, ListItem, CardMedia, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';


const IMAGES = [
  {
    src: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20220616_165520.jpg',
    description: 'Idp Shimla Notifications.'
  },
  {
    src: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20220314_115602.jpg',
    description: 'Reckongpeo'
  },
  {
    src: 'https://tcp.hp.gov.in/Application/uploadDocuments/devlopmentPlan/PlanImeage20220314_115257.jpg',
    description: 'Kandaghat'
  },
];

const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '80%',
    width: '500px',
    marginRight: '30px',
    overflow: 'hidden',
    '& .MuiCardContent-root': {
      flexGrow: 1,
      overflow: 'auto',
      display: 'flex',
      flexWrap: 'wrap'
    },
    background: 'linear-gradient(to right, #FFF5FF, #FFE5FF)',
  },
  listItem: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    padding: '16px 0'
  },
  media: {
    width: '150px',
    height: '50px',
    marginTop: '30px'
  }
});

const Development = () => {
  const classes = useStyles();

  const handleReadMoreClick = () => {
    // handle read more click event
  }

  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom style={{fontSize: '22px', color: '#4D004C', fontWeight: 'bold'}}>
          Development Plans
        </Typography>
        <List>
          {IMAGES.map((image, index) => (
            <ListItem key={index} className={classes.listItem}>
              <CardMedia className={classes.media} image={image.src} title={image.description} />
              <Typography variant="body1" style={{marginLeft: '20px', color: '#80007D', marginTop: '20px'}}>{image.description}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Button onClick={handleReadMoreClick} style={{width: '120px', height: '40px', margin: '20px',   padding: '5px', borderColor: '#4D004B', color: '#CC00C5', border: '2px solid #4D004B', backgroundColor: 'transparent', }}>Read More +</Button>
    </Card>
  );
}

export default Development;