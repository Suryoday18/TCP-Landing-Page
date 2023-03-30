import { Card, CardContent, Typography } from '@material-ui/core';
import { Button } from '@mui/material';

const AboutUs = () => {
  return (
    <div>
    <Card style={{maxWidth: 900, height: 'auto', margin: '10px', color: 'black'}}>
      <CardContent style={{padding: '30px'}}>
        <Typography variant="h5" style={{margin: '10px', color: "black", padding: "5px", fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid black'}}>
          About Town and Country Planning Department
        </Typography>
        <Typography variant="p" style={{ margin: '10px', padding: "10px", fontSize: '15px', borderRadius: '5px', lineHeight: '1.6'}}>
        Town and Country Planning Department (TCPD) was set up in 1962 with the merger of the erstwhile Town Planning Organization (TPO) and Central Regional and Urban Planning Organization (CRUPO).TPO was set up in 1955 to formulate the First Master Plan for Delhi. The TPO completed the assigned task of formulation of Master Plan for Delhi in September 1962 .Subsequently &nbsp;in 1957, Government of India set up another organization called Central Regional and Urban Planning Organization (CRUPO) to evolve a plan for Delhi Region and to advise on the development of steel towns, river valley projects and other matters related with urban and regional planning. CRUPO started functioning activity from September 1959 in an advisory capacity to the Central Ministries of the Government of India, Planning Commission, State Governments, Local Bodies and Public Undertakings. The organization also initiated studies on various aspects of urban and regional planning and development. The first conference of State Ministers dealing with Town and Country Planning was organized by CRUPO in 1960 which made a beginning for undertaking a countrywide programme for preparation of master plans, enactment of town planning legislation, setting up of Town Planning Departments in the States and Union Territories and augmentation of facilities in education and training in town and country planning.
        </Typography>
        <Button style={{padding: '6px 12px', backgroundColor: '#012951', color: 'white', border: '1px solid #122b40', marginLeft: '680px'}}>Read More +</Button>
      </CardContent>
    </Card>
    </div>
  );
};

export default AboutUs