import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { auth } from '../../auth';
import { Alert, Paper } from '@mui/material';

export default async function HomePage() {
  const session = await auth();

  const chartImages = Array.from({ length: 12 }, (_, i) => `/assets/charts/chart${i + 1}.jpeg`);

  return (
    <>
      <Paper elevation={2} sx={{ margin: 2, padding: 2, borderRadius: 2, backgroundColor: '#023f81' }}>
        <Typography variant="h4" sx={{ fontFamily: 'opensanshebrewcondensed-regular', textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center', color: 'whitesmoke' }}>Dashboard</Typography>
      </Paper>
      <Box sx={{ marginTop: 4 }}>
        <Alert severity="info" sx={{ marginBottom: 2, textAlign: 'center' }}>
          Exemplo demonstrativo dos widgets dos gráficos. Os widgets reais ainda estão em desenvolvimento.
        </Alert>
        <Grid container spacing={2}>
          {chartImages.map((src, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box 
                component="img" 
                src={src} 
                alt={`Gráfico ${index + 1}`} 
                sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3, padding: 2, backgroundColor: '#023f81' }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
