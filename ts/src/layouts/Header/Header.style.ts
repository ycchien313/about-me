import { MobileContext } from 'contexts/Mobile/Mobile';
import { useContext } from 'react';
import { Stack, styled, Typography } from '@mui/material';

export const StyledNavbar = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledLogo = styled('div')(({ theme }) => {
  const { isMobile } = useContext(MobileContext);
  return {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    fontFamily: 'Kaushan Script, Helvetica Neue, Helvetica, Arial, cursive',
    fontSize: isMobile ? '1.5rem' : '2rem',
  };
});

export const StyledNavMenu = styled(Stack)(() => ({
  flexDirection: 'row',
  gap: '2rem',
}));

export const StyledNavItem = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    fontSize: '1rem',

    '&:hover': {
      color: theme.palette.primary.main,
      transition: '0.15s',
    },
  },
}));