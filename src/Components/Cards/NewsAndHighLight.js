import {  Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import {FaAngleDoubleRight} from 'react-icons/fa'


const useStyles = makeStyles({
  button: 
  {
    padding: '10px',
    borderRadius: '10px',
    fontSize: '12px',
    // backgroundColor: '#4ca9d9',
    // background: 'linear-gradient(to right, #F5FFF5, #003300)',
    // transition: 'background-color: .5s ease',
    width: '300px',
    height: '100px',
    marginRight: '10px',
    margin: '10px'
    
  },
})


const NewsAndHighlights = () => {
  const classes = useStyles()
  return (
    <Card style={{maxWidth: 500, margin: '10px', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
      <CardContent>
        <Typography variant="h6" style={{ backgroundColor: '#1F4A7C', margin: '10px', color: "#fff", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
            News and HighLights
        </Typography>
        <div style={{margin: '15px'}}>
          <FaAngleDoubleRight color='#1F4A7C' />
        <a variant="body1" href='/' component="p" className={classes.button} style={{fontSize: '14px'}}>
            Public Notice on Revision of Recruitment Rules for the post of Planning Assistant (re-designated as Planning Officer) in TCPO
        </a>
        </div>
        <div style={{margin: '15px'}}>
        <FaAngleDoubleRight color='#1F4A7C' />
        <a variant="body1" href='/' component="p" style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
         Azadi ka Amrut Mahotsav
        </a>
        </div>
        <div style={{margin: '15px'}}>
        <FaAngleDoubleRight color='#1F4A7C' />
        <a variant="body1" href='/' component="p" style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
            Public Procurement (Preference to Make in India) (PPP-MIII) Order 2017
        </a>
        </div>
        <div style={{margin: '15px'}}>
        <FaAngleDoubleRight color='#1F4A7C' />
        <a variant="body1"  href='/' component="p" style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
            Nodal Officer for Public grievances pertaining to COVID-19
        </a>
        </div>
        <div style={{margin: '15px'}}>
        <FaAngleDoubleRight color='#1F4A7C' />
        <a variant="body1" href='/' component="p" style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
         Training Report on Vetting under AMRUT GIS Sub Scheme at Tamilnadu
        </a>
        </div>
        <div style={{margin: '15px'}}>
        <FaAngleDoubleRight color='#1F4A7C' />
        <a variant="body1" href='/' component="p" style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
            Public Procurement (Preference to Make in India) (PPP-MIII) Order 2017
        </a>
        </div>
        <div style={{margin: '15px'}}>
        <FaAngleDoubleRight color='#1F4A7C'/>
        <a variant="body1"  href='/' component="p" style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
            Nodal Officer for Public grievances pertaining to COVID-19
        </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsAndHighlights