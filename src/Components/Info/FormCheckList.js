import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '80%',
    overflow: 'auto',
    marginLeft: '30px',
    '& .MuiCardContent-root': {
      flexGrow: 1,
      overflow: 'auto'
    }
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0
  }
});

const FormChecklist = () => {
  const classes = useStyles();

  const handleReadMoreClick = () => {
    // handle read more click event
  }

  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom style={{fontSize: '22px'}}>
          Form/Checklist
        </Typography>
        <List className={classes.list}>
          <ListItem>
          <li><a href="https://tcp.hp.gov.in/Application/uploadDocuments/download/Document20201208_123620.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '13px'}} class="screenReader" title="Internal Procedure For Change Of Land Use Approval" tabindex="84">Internal Procedure For Change Of Land Use ...</a></li>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/download/Document20180131_103934.pdf" target="_blanck" class="screenReader" style={{textDecoration: 'none', fontSize: '13px'}} title="Internal Procedure For Building Planning Approval" tabindex="85">Internal Procedure For Building Planning ...</a>
          </ListItem>
          <Divider />
          <ListItem>
            <a href="https://tcp.hp.gov.in/Application/uploadDocuments/download/Document20210113_155622.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '13px'}} class="screenReader" title="Inspection Procedure And Checklist Of Obtaining Construction Permit" tabindex="86">Inspection Procedure And Checklist Of ...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/download/Document20210113_155622.pdf" target="_blanck"  style={{textDecoration: 'none', fontSize: '13px'}} class="screenReader" title="Inspection Procedure And Checklist Of Obtaining Construction Permit" tabindex="86">Inspection Procedure And Checklist Of ...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/download/Document20180217_143141.pdf" target="_blanck" class="screenReader" style={{textDecoration: 'none', fontSize: '13px'}} title="Procedure And Guidelines For Obtaning Planning Permission On Form 12" tabindex="88">Procedure And Guidelines For Obtaning ...</a>
          </ListItem>
        </List>
      </CardContent>
      <Button onClick={handleReadMoreClick} style={{width: '120px', height: '40px', margin: '20px',   padding: '5px', borderColor: '#CE4825', color: '#CE4825', border: '2px solid #CE4825', backgroundColor: 'transparent', }}>Read More</Button>
    </Card>
  );
}

export default FormChecklist;
