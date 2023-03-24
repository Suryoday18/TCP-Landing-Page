import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import AuthDetails from './AuthDetails'
import ImportantLinks from './ImportantLink'


// const cards = [
//     {
//       title: 'AMRUT-Reforms',
//       logo: 'http://www.tcpo.gov.in/sites/default/files/Amrut.png',
//       para: 'Atal Mission for Rejuvenation and Urban Transformation (AMRUT) Reforms to improve service delivery system mobilize resources and make municipal functioning more transparent and accountable'
//     },
   
//     {
//       title: 'AMRUT Sub-Scheme ',
//       logo: 'http://www.tcpo.gov.in/sites/default/files/AmrutSubscheme.png',
//       para: 'Formulation of GIS-Based Master Plans for AMRUT Cities is one of the important reforms under Atal Mission for Rejuvenation and Urban Transformation.'
    
//     },
//     {
//       title: 'Local Area Plan',
//       logo: 'http://tcpo.gov.in/sites/default/files/LAP.png',
//       para: 'This is a pilot to support the preparation of Local Area Plan (LAP)and Town Planning Schemes (TPS) in the States/Cities and build local capacity for undertaking such tasks.'
//     },
//     {
//       title: 'URDPFI',
//       logo: 'http://www.tcpo.gov.in/sites/default/files/URDPFI.png',
//       para: 'Urban and Regional Development Plan formulation and Implementation – 2014 is modified and upgraded version UDPFI Guidelines-1996 for framework for Urban Development and Plan formulation.'
//     },
//     {
//       title: 'MBBL',
//       logo: 'http://www.tcpo.gov.in/sites/default/files/MBBL.png',
//       para: 'Building Bye-Laws are legal tools used to regulate coverage, height, building bulk, and architectural design and construction aspects of buildings so as to achieve orderly development of an area.'
//     },
//     {
//       title: 'Harmonized Guidelines',
//       logo: 'http://tcpo.gov.in/sites/default/files/GUIDELINES.png',
//       para: 'Harmonized Guidelines and Space Standards for barrier Free Built Environment for Persons with Disability and Elderly Persons.'
//     },
//   ];
const FooterCard = () => {

  return (
    <Card style={{backgroundColor: '#1F4A7C', boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}}>
      <CardContent>
      {/* {cards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title} display='flex' flexDirection='row' justifyContent='space-around'>
            <Card style={{backgroundColor: '#1F4A7C'}}>
            <CardContent >
                <Typography gutterBottom variant="p" component="p" style={{fontSize: '13px', margin: '12px', color: 'white',fontWeight: 'bold'}}>
                  {card.title}
                </Typography>
              </CardContent>
              <CardMedia
                component='img'
                image={card.logo}
                title={card.title}
                style={{height: '240px'}}
              />
            </Card>
          </Grid>
        ))} */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{width: '400px', height: '400px'}}>
              <CardMedia
                component="img"
                height="200px"
                image="http://www.tcpo.gov.in/sites/default/files/Amrut.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                AMRUT-Reforms
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Atal Mission for Rejuvenation and Urban Transformation (AMRUT) Reforms to improve service delivery system mobilize resources and make municipal functioning more transparent and accountable
                </Typography>
                <Button>Read More +</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200px"
                image="http://www.tcpo.gov.in/sites/default/files/AmrutSubscheme.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                AMRUT Sub-Scheme
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{padding: '10px'}}>
                Formulation of GIS-Based Master Plans for AMRUT Cities is one of the important reforms under Atal Mission for Rejuvenation and Urban Transformation.
                </Typography>
                <Button>Read More +</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card>
              <CardMedia
                component="img"
                height="200px"
                image="http://tcpo.gov.in/sites/default/files/LAP.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Local Area Plan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                This is a pilot to support the preparation of Local Area Plan (LAP)and Town Planning Schemes (TPS) in the States/Cities and build local capacity for undertaking such tasks.
                </Typography>
                <Button>Read More +</Button>
              </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200px"
                image="http://www.tcpo.gov.in/sites/default/files/URDPFI.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  URDPFI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Urban and Regional Development Plan formulation and Implementation – 2014 is modified and upgraded version UDPFI Guidelines-1996 for framework for Urban Development and Plan formulation.
                </Typography>
                <Button>Read More +</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200px"
                image="http://www.tcpo.gov.in/sites/default/files/MBBL.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  MBBL
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Building Bye-Laws are legal tools used to regulate coverage, height, building bulk, and architectural design and construction aspects of buildings so as to achieve orderly development of an area.
                </Typography>
                <Button>Read More+</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card>
              <CardMedia
                component="img"
                height="200px"
                image="http://tcpo.gov.in/sites/default/files/GUIDELINES.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Harmonized Guidelines
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{padding: '10px'}}>
                Harmonized Guidelines and Space Standards for barrier Free Built Environment for Persons with Disability and Elderly Persons.
                </Typography>
                <Button>Read More +</Button>
              </CardContent>
          </Card>
          </Grid>
        </Grid>
        </CardContent>
       <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: '900px'}}><AuthDetails /></div>
            <div style={{width: '600px'}}><ImportantLinks /></div>
       </div>
    </Card>
  )
  
}

export default FooterCard
