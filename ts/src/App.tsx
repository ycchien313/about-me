import { ReactElement } from 'react';
import { theme } from 'theme';
import { MobileProvider } from './contexts';
import { ThemeProvider } from '@mui/material';
import { Router } from '@/router';

function App(): ReactElement {
  return (
    <MobileProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </MobileProvider>
  );
}

export default App;
