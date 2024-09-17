import * as React from 'react';
import { AppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import PeopleIcon from '@mui/icons-material/People';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import type { Navigation } from '@toolpad/core';
import { SessionProvider, signIn, signOut } from 'next-auth/react';
import { auth } from '../auth';
import theme from '../theme';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Itens do menu',
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'sizing',
    title: 'Dimensionamento',
    icon: <Diversity1Icon />,
  },
  {
    segment: 'map',
    title: 'Mapa',
    icon: <MapIcon />,
  },
  {
    segment: 'counter',
    title: 'Pacientes',
    icon: <PeopleIcon />,
  }
];

const BRANDING = {
  logo: <img src="https://healthflow.netlify.app/_astro/HealthflowLogo.C15_rad7.png" style={{paddingRight: '10px'}} alt='HealthFlow Logo'/>,
  title: 'HealthFlow',
};

const AUTHENTICATION = {
  signIn,
  signOut,
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <html lang="en">
      <head>
        <title>HealthFlow</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <SessionProvider session={session}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <AppProvider
              navigation={NAVIGATION}
              branding={BRANDING}
              session={session}
              authentication={AUTHENTICATION}
              theme={theme}
            >
              {props.children}
            </AppProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
