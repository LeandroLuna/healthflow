import * as React from 'react';
import Typography from '@mui/material/Typography';
import MQTTMap from '../../components/MQTTMap';

export default function MapPage() {
  return (
    <>
      <Typography>
        Bem-vindo ao mapa!
      </Typography>
      <MQTTMap />
    </>
  );
}
