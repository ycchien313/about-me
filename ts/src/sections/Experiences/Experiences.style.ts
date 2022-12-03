import { useContext } from 'react';
import { MobileContext } from '@/contexts';
import { Box, Container, Divider, Stack, styled } from '@mui/material';
import { Circle } from '@mui/icons-material';

export const StyledRoot = styled(Container)`
  padding: 100px 20px;
  text-align: center;
`;

export const StyledExperiences = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledExperience = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.secondary.main,
  width: '100%',
  ':not(:last-child)': {
    minHeight: '100px',
  },
}));

export const StyledYear = styled('span')`
  flex: 0.4;
  min-width: 60px;
  text-align: right;
`;

export const StyledDivider = styled(Divider)(() => {
  const { isMobile } = useContext(MobileContext);
  return {
    width: '1px',
    background: '#CCC',
    borderRadius: '10%',
    margin: isMobile ? '0 20px 0 26.6px' : '0 60px 0 80px',
  };
});

export const StyledAchievement = styled(Stack)(() => {
  const { isMobile } = useContext(MobileContext);
  return {
    flex: isMobile ? '1' : '0.6',
    fontSize: isMobile ? '0.8rem' : '1.2rem',
  };
});

export const StyledCircle = styled(Circle)({
  color: '#FE9010',
  fontSize: '1rem',
});