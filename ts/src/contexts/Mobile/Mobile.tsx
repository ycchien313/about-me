import { createContext, ReactElement } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export const MobileContext = createContext({
  isMobile: false,
});

export default ({ children }: { children: ReactElement }): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const value = { isMobile };

  return (
    <MobileContext.Provider value={value}>
      {children}
    </MobileContext.Provider>
  );
};