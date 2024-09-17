'use client';

import React, { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MQTTMap from '../../components/MQTTMap';
import PeopleCounter from '../../components/PeopleCounter';
import { ref, set } from 'firebase/database';
import { database } from '../../utils/firebaseConfig';

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
      <div style={{ "marginBottom": 20 }}>
        <Typography>Total de pacientes: {peopleCount}</Typography>
        <Typography>Total de enfermeiros: {nurseCount}</Typography>
        <Typography>Status: {getStatus()}</Typography>
      </div>
      <MQTTMap onNurseCountChange={setNurseCount}/>
      <PeopleCounter onCountChange={setPeopleCount} showCounter={false} />
      {/* <Button variant="contained" color="primary" onClick={addRandomNurse}>
        Adicionar enfermeiro aleatório
      </Button> */}
    </>
  );
}