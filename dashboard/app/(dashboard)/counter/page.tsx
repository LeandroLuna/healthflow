import * as React from 'react';
import Typography from '@mui/material/Typography';
import PeopleCounter from '../../components/PeopleCounter';

export default function CounterPage() {
  return (
    <> 
        <Typography>
        Bem-vindo ao contador de pacientes!
        </Typography>
        <PeopleCounter />
    </>
  );
}