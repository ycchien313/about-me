import { useContext } from 'react';
import { Button, styled } from '@mui/material';
import banner1 from '@/assets/banners/banner1.jpg';
import { MobileContext } from '@/contexts';

export const StyledRoot = styled('section')(() => {
  const { isMobile } = useContext(MobileContext);
  const backgroundPositionTop = `${764 / 1100 * 100}%`;

  return {
    width: '100vw',
    height: '100vh',
  
    // backgroundImage: `url(${'https://drive.google.com/uc?export=view&id=1mw0HJhYcNLleO_N11OF0udQ7cjdElKln'})`,
    backgroundImage: `url(${banner1})`,
    backgroundPosition: isMobile ? 'top 0% right 40%' : `top ${backgroundPositionTop} center`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
});


export const StyledTextWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(5),
  padding: '1rem',
}));

export const StyledPrefix = styled('div')(() => ({
  /* color: #B8C1C7; */
  /* color: #FE9010; */
  color: '#011E51',
  fontSize: `clamp(${'1rem, 7vw, 2.5rem'})`,
  lineHeight: 'initial',
}));

export const StyledTitle = styled('div')(() => ({
  /* color: #011E51; */
  color: '#FFF',
  fontStyle: 'italic',
  fontSize: `clamp(${'2.5rem, 10vw, 5rem'})`,
  lineHeight: 'initial',
}));

export const StyledSubtitle = styled('div')(() => ({
  color: '#FFF',
  fontSize: `clamp(${'1rem, 7vw, 2.5rem'})`,
  lineHeight: 'initial',
}));

export const StyledAction = styled(Button)(({ theme }) => ({
  '&.MuiButton-root': {
    background: theme.palette.primary.main,
    borderRadius: '5px',
    boxShadow: '3px 10px 2px 1px rgba(0, 0, 0, 0.3)',
    color: '#FFF',
    cursor: 'pointer',
    fontSize: '2rem',
    padding: '10px 30px',

    '&:hover': {
      background: '#FE9F00',
    },
  },
}));