import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    mapContainer: {
      height: 'auto',
      width: '100%',
      maxWidth: '200px'
    },
  });

  const TCPHLocation = () => {
    const classes = useStyles();
  
    return (
      <MapContainer className={classes.mapContainer} center={[30.7396, 76.7828]} zoom={15}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    );
  };
  
  export default TCPHLocation;
  
  