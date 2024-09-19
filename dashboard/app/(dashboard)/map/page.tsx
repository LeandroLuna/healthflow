import * as React from 'react';
import MQTTMap from '../../components/MQTTMap';
import { Paper, Typography } from '@mui/material';

export default function MapPage() {
  return (
    <>
      <Paper elevation={2} sx={{  margin: 2 ,padding: 2, borderRadius: 2, backgroundColor: '#023f81' }}>
        <Typography variant="h4" sx={{ fontFamily: 'opensanshebrewcondensed-regular', textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center', color: 'whitesmoke' }} >Mapa RTLS</Typography>
      </Paper>
      <MQTTMap />
    </>
  );
}
