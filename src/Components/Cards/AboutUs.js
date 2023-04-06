import { Card, CardContent, Typography } from '@material-ui/core';
import { Button } from '@mui/material';

const AboutUs = () => {
  return (
    <div>
    <Card style={{maxWidth: 900, height: '430px', margin: '10px', color: 'black'}}>
      <CardContent style={{padding: '30px'}}>
        <Typography variant="h5" style={{margin: '10px', color: "black", padding: "5px", fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid black'}}>
          About Town and Country Planning Department
        </Typography>
        <Typography variant="p" style={{ margin: '-10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
        The Town and Country Planning was created as a small cell in Himachal Pradesh, Public Works Department in the year 1964. During 1979, it was created as in independent Directorate headed by Chief Engineer of Himachal Pradesh Public Works Department till 1993 when independent Director was appointed as Head of Department.
        </Typography>
        <Button style={{padding: '6px 12px', backgroundColor: '#012951', color: 'white', border: '1px solid #122b40', marginLeft: '680px'}}>Read More +</Button>
      </CardContent>
    </Card>
    </div>
  );
};

export default AboutUs