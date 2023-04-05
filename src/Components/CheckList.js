import React from 'react';
import { makeStyles } from '@mui/styles';
import {Card, CardContent, Typography, List, ListItem } from '@mui/material';
import {HiOutlineClipboardDocumentList} from 'react-icons/hi2'
import { Button } from '@material-ui/core';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    margin: '10px',
    height: '480px',
    // overflow: 'auto',
    // '& .MuiCardContent-root': {
    //   flexGrow: 1,
    //   overflow: 'auto'
    // },
     background: 'linear-gradient(to right, #F5F5FF, #B3B3FF)',
  },
  heading: {
    padding: '10px',
    borderBottom: '1px solid white'
  },
  paragraph: {
    padding: '10px',
    marginBottom: '8px',
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0, 
    fontSize: '20px'
  }
});

const Checklist = () => {
  const classes = useStyles();

  const handleReadMoreClick = () => {
    // handle read more click event
  }
  return (
    
    <Card className={classes.cardContainer} style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'}}>
      <CardContent>
     <div style={{display: 'flex', flexDirection: 'row'}}>
     <HiOutlineClipboardDocumentList style={{width: '50px', height: '50px', color: '#154773'}}/>
     <Typography variant="h5" component="h2" gutterBottom style={{fontSize: '22px', color: '#1F4A7C', fontWeight: 'bold'}}>
          Form/CheckLists
        </Typography>
      </div>
      <List className={classes.list}>
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20201210_132526.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '14px', color: '#1F4A7C', fontWeight: 'bold'}} class="screenReader" title="Circular Mandating Online Submission Of Applications" tabindex="91">Internal Procedure For Change Of Land Use ...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20190524_122513.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '14px', color: '#1F4A7C', fontWeight: 'bold'}} class="screenReader" title="Clarification Regarding Mis - Interpreting Of Basements" tabindex="92">Internal Procedure For Building Planning ...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20160928_174624.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '14px', color: '#1F4A7C', fontWeight: 'bold'}} class="screenReader" title="Notice For Publication Of Proposed Amendment(s) In Development Plans." tabindex="93">Inspection Procedure And Checklist Of ...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20160928_173242.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '14px', color: '#1F4A7C', fontWeight: 'bold'}} class="screenReader" title="Exemptions In Rural Areas-clarifications Thereof" tabindex="95">Form Application for composition of offences...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20160928_174203.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '14px', color: '#1F4A7C', fontWeight: 'bold'}} class="screenReader" title="Amendment In Idp Shimla Notification Dated 28/06/2016." tabindex="94">Procedure And Guidelines For Obtaning Planning Permission...</a>
          </ListItem>
          <Divider />
          <ListItem>
          <a href="https://tcp.hp.gov.in/Application/uploadDocuments/notification/Notice20160928_174203.pdf" target="_blanck" style={{textDecoration: 'none', fontSize: '14px', color: '#1F4A7C', fontWeight: 'bold'}} class="screenReader" title="Amendment In Idp Shimla Notification Dated 28/06/2016." tabindex="94">Procedure, Checklist For Obtaning Noc After...</a>
          </ListItem>
          <Divider />
        </List>
        <Button onClick={handleReadMoreClick} style={{width: '120px', height: '40px', margin: '10px',   padding: '5px', borderColor: '#4D004B', color: '#1F4A7C', border: '2px solid #1F4A7C', backgroundColor: 'transparent' }}>Read More +</Button>
      </CardContent>
      </Card>
    
  );
};

export default Checklist;