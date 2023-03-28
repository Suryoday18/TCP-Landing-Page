import { Card, CardContent } from '@mui/material';
import AuthDetails from './AuthDetails'
import ImportantLinks from './ImportantLink'
import { makeStyles } from '@mui/styles';



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
const useStyles = makeStyles({
  button: 
  {
    padding: '5px',
    borderRadius: '10px',
    fontSize: '12px',
    backgroundColor: '#4ca9d9',
    background: 'linear-gradient(to right,  #F5F5FF, #CCCCFF)',
    transition: 'background-color: .5s ease',
    width: '150px',
    height: '40px',
    marginRight: '10px',
  },
  headings: {
    fontFamily: 'sans-serif',
    color: '#1F4A7C',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  paraGraph: {
    // padding: '5px 0px 5px 0px'
  }
})
const FooterCard = () => {
  const classes = useStyles()

  return (
    <Card style={{backgroundColor: '#1F4A7C', boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'}}>
      {/* <CardContent>
      
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{width: '400px', height: '400px'}}>
              <CardMedia
                component="img"
                height="200px"
                image="http://www.tcpo.gov.in/sites/default/files/Amrut.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={classes.headings}>
                AMRUT-Reforms
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.paraGraph}>
                Atal Mission for Rejuvenation and Urban Transformation (AMRUT) Reforms to improve service delivery system mobilize resources and make municipal functioning more transparent and accountable
                </Typography>
                <Button className={classes.button}>Read More +</Button>
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
                <Typography gutterBottom variant="h5" component="div" className={classes.headings}>
                AMRUT Sub-Scheme
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.paraGraph} style={{padding: '10px'}}>
                Formulation of GIS-Based Master Plans for AMRUT Cities is one of the important reforms under Atal Mission for Rejuvenation and Urban Transformation.
                </Typography>
                <Button className={classes.button}>Read More +</Button>
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
                <Typography gutterBottom variant="h5" component="div" className={classes.headings}>
                    Local Area Plan
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.paraGraph}>
                This is a pilot to support the preparation of Local Area Plan (LAP)and Town Planning Schemes (TPS) in the States/Cities and build local capacity for undertaking such tasks.
                </Typography>
                <Button className={classes.button}>Read More +</Button>
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
                <Typography gutterBottom variant="h5" component="div" className={classes.headings}>
                  URDPFI
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.paraGraph}>
                Urban and Regional Development Plan formulation and Implementation – 2014 is modified and upgraded version UDPFI Guidelines-1996 for framework for Urban Development and Plan formulation.
                </Typography>
                <Button className={classes.button}>Read More +</Button>
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
                <Typography gutterBottom variant="h5" component="div" className={classes.headings}>
                  MBBL
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.paraGraph}>
                Building Bye-Laws are legal tools used to regulate coverage, height, building bulk, and architectural design and construction aspects of buildings so as to achieve orderly development of an area.
                </Typography>
                <Button className={classes.button}>Read More+</Button>
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
                <Typography gutterBottom variant="h5" component="div" className={classes.headings}>
                Harmonized Guidelines
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.paraGraph} style={{padding: '10px'}}>
                Harmonized Guidelines and Space Standards for barrier Free Built Environment for Persons with Disability and Elderly Persons.
                </Typography>
                <Button className={classes.button}>Read More +</Button>
              </CardContent>
          </Card>
          </Grid>
        </Grid>
      </CardContent> */}
      <CardContent>
       <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: '900px',marginLeft: '100px'}}><AuthDetails /></div>
            <div style={{width: '600px', marginRight: '100px'}}><ImportantLinks /></div>
       </div>
       </CardContent>
    </Card>
  )
  
}

export default FooterCard
