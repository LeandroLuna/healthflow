'use client';

import React, { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MQTTMap from '../../components/MQTTMap';
import PeopleCounter from '../../components/PeopleCounter';
import { ref, set } from 'firebase/database';
import { database } from '../../utils/firebaseConfig';
import { Box, Paper, Stack } from '@mui/material';

export default function SizingPage() {
  const [peopleCount, setPeopleCount] = useState(0);
  const [nurseCount, setNurseCount] = useState(0);

  const getStatus = () => {
    const patientToNurseRatio = peopleCount - 6 * nurseCount;

    // If there is only one nurse and up to 6 people, it is always OK.
    // Or if there are no nurses and no people, it is always OK
    if ((nurseCount === 1 && peopleCount <= 6) || nurseCount === 0 && peopleCount === 0) {
      return 'OK';
    }

    // If the ratio between patients and nurses is less than -3, it is inadequate, meaning that there are too many nurses for the number of patients.
    // Or if there are no nurses and there are people, it is inadequate
    if (patientToNurseRatio < -3 || nurseCount === 0 && peopleCount > 0) {
      return 'Inadequado';
      // If the ratio is 0, it is risky, meaning that exists a risk of not having enough nurses for the number of patients
    } else if (patientToNurseRatio === 0) {
      return 'Risco';
      // If the ratio is less than 3, it is adequate, meaning that there are enough nurses for the number of patients
    } else if (patientToNurseRatio < 3) {
      return 'Adequado';
    }
  };

  const addRandomNurse = useCallback(() => {
    const randomId = Math.floor(Math.random() * 10000).toString();
    const randomX = Math.random() * 5;
    const randomY = Math.random() * 2;

    set(ref(database, `coordinates`), {
      id: randomId,
      x: randomX,
      y: randomY
    }).then(() => {
      setNurseCount((prevCount) => prevCount + 1);
    }).catch((error) => {
      console.error('Erro ao adicionar enfermeiro:', error);
    });
  }, []);

  return (
    <>

      <Paper elevation={2} sx={{ margin: 2, padding: 2, borderRadius: 2, backgroundColor: '#023f81' }}>
        <Typography variant="h4" sx={{ fontFamily: 'opensanshebrewcondensed-regular', textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center', color: 'whitesmoke' }} >Dimensionamento</Typography>
      </Paper>
      <Box sx={{ marginBottom: 2 }}>
        <Paper elevation={2} sx={{ padding: 2, borderRadius: 2 }}>
          <Stack direction="row" spacing={2} sx={{
            justifyContent: "space-around",
            alignItems: "center",
          }}>
            <Paper elevation={1} sx={{ backgroundColor: '#023f81', padding: 2, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontFamily: 'opensanshebrewcondensed-regular', textTransform: 'uppercase', color: 'white' }} >pacientes: <span style={{ fontWeight: 'bold' }}> {peopleCount}</span></Typography>
            </Paper>
            <Paper elevation={1} sx={{ backgroundColor: '#023f81', padding: 2, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontFamily: 'opensanshebrewcondensed-regular', textTransform: 'uppercase', color: 'white' }} >enfermeiros: <span style={{ fontWeight: 'bold' }}>{nurseCount}</span></Typography>
            </Paper>
            <Paper elevation={1} sx={{ backgroundColor: '#023f81', padding: 2, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontFamily: 'opensanshebrewcondensed-regular', textTransform: 'uppercase', color: 'white' }} >Status: <span style={{ fontWeight: 'bold' }}>{getStatus()}</span></Typography>
            </Paper>
          </Stack>
        </Paper>
      </Box>
      <Stack sx={{ justifyContent: "space-around", alignItems: "center" }}>

        <MQTTMap onNurseCountChange={setNurseCount} />
      </Stack>
      <PeopleCounter onCountChange={setPeopleCount} showCounter={false} />
      {/* <Button variant="contained" color="primary" onClick={addRandomNurse}>
        Adicionar enfermeiro aleatório
      </Button> */}
    </>
  );
}