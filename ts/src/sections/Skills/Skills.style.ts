import { useContext } from 'react';
import { MobileContext } from '@/contexts';
import { styled } from '@mui/material';

export const StyledRoot = styled('section')(() => ({
  padding: '100px 20px',
  textAlign: 'center'
}));

export const StyledBoxesWrapper = styled('div')(() => {
  const { isMobile } = useContext(MobileContext);
  return {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'unset',
    justifyContent: 'space-evenly',
    rowGap: '40px',
  };
});

export const StyledBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const StyledBoxTitle = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '1.5rem',
  fontWeight: 'bolder',
}));

export const StyledBoxFigure = styled('figure')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: theme.palette.secondary.main,
  margin: '10px',
}));
export const StyledBoxIcon = styled('div')(() => ({
  width: '30px',
}));
export const StyledIcon = styled('img')(() => ({
  width: '100%',
}));