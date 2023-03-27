import { Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles({
  button: 
  {
    padding: '10px',
    borderRadius: '10px',
    fontSize: '12px',
    backgroundColor: '#4ca9d9',
    background: 'linear-gradient(to right,  #F5F5FF, #CCCCFF)',
    transition: 'background-color: .5s ease',
    width: '200px',
    height: '50px',
    marginRight: '10px',
    margin: '10px'
    
  },
})


const ImportantLinks = () => {
  const classes = useStyles()
  return (
    <Card style={{maxWidth: 900, height: '650px', margin: '10px', background: 'linear-gradient(to right,  #F5F5FF, #CCCCFF)', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
      <CardContent>
        <Typography variant="h6" style={{ backgroundColor: '#1F4A7C', margin: '10px', color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
            Important Websites/Links
        </Typography>
        {/* <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
        <img src="https://obpsud.hp.gov.in/img/tcp_logo.png" alt="tcp.hp.gov.in" style={{width: '300px', margin: '10px'}}/>
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
        <img src="https://obpsud.hp.gov.in/img/hmpg.png" alt="tcpomud.gov.in" style={{width: '300px', height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
        <img src="https://obpsud.hp.gov.in/img/emblem.png" alt="nmanoc" style={{width: '300px',height: '50px'}} />
        </Button> */}
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>
         <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/india-gov.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/digital-india.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/my-gov_1.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/make-india_1.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/skill.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/data-gov.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/logo-007.jpg" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/censusdata_1.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        </div>
        <div>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/cpheeo.png" alt="nmanoc" style={{width: '180px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/ncrb.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/isro.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/soi_1.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/rbin_1.png" alt="nmanoc" style={{width: '130px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/darpan_1.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/logo-003.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        <Button variant="body1" component="p" className={classes.button}>
        <img src="http://www.tcpo.gov.in/sites/default/files/newfile/bhim_1.png" alt="nmanoc" style={{width: '150px',height: '50px'}} />
        </Button>
        </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImportantLinks