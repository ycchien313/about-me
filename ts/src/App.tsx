import { ReactElement, Suspense } from 'react';
import { MobileProvider } from './contexts/Mobile';
import { ThemeProvider } from '@mui/material';
import { Router } from '@/router';
import { theme } from '@/theme';

function App(): ReactElement {
  return (
    <MobileProvider>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>loading...</div>}>
          <Router />
        </Suspense>
      </ThemeProvider>
    </MobileProvider>
  );
}

export default App;
