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
    width: '300px',
    height: '60px',
    marginRight: '10px',
    margin: '10px'
    
  },
})


const ImportantLinks = () => {
  const classes = useStyles()
  return (
    <Card style={{maxWidth: 900, height: '600px', margin: '10px', background: 'linear-gradient(to right,  #F5F5FF, #CCCCFF)', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
      <CardContent>
        <Typography variant="h6" style={{ backgroundColor: '#1F4A7C', margin: '10px', color: "white", padding: "10px", fontSize: '15px', borderRadius: '5px' }}>
            Important Websites/Links
        </Typography>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
        <img src="https://obpsud.hp.gov.in/img/tcp_logo.png" alt="tcp.hp.gov.in" style={{width: '300px', margin: '10px'}}/>
        {/* Link 1 */}
        </Button>
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
        <img src="https://obpsud.hp.gov.in/img/hmpg.png" alt="tcpomud.gov.in" style={{width: '300px', height: '60px'}} />
        {/* Link 2 */}
        </Button>
        
        <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '20px'}}>
        <img src="https://obpsud.hp.gov.in/img/emblem.png" alt="nmanoc" style={{width: '300px',height: '60px'}} />
        {/* Link 3 */}
        </Button>
        {/* <Button variant="body1" component="p" className={classes.button} style={{ padding: '10px', borderRadius: '10px', fontSize: '14px', marginTop: '10px'}}>
        <img src="https://tcp.hp.gov.in/Application/uploadDocuments/importantLink/link20191207_143303.png" alt="tcp.hp.gov.in" style={{width: '300px'}}/>
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default ImportantLinks