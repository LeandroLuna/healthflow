import * as React from 'react';
import PeopleCounter from '../../components/PeopleCounter';
import { Paper, Typography } from '@mui/material';

export default function CounterPage() {
  return (
    <>
      <Paper elevation={2} sx={{ margin: 2, padding: 2, borderRadius: 2, backgroundColor: '#023f81' }}>
        <Typography variant="h4" sx={{ fontFamily: 'opensanshebrewcondensed-regular', textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center', color: 'whitesmoke' }} > Contador de pacientes </Typography>
      </Paper>
      <PeopleCounter showCounter={true} />
    </>
  );
}